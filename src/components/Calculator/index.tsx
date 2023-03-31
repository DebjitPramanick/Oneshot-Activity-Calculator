import { useState, useEffect } from 'react'
import { ActionsContainer, BlurOverlay, CaculatorContainer } from './styles'
import INPUT from './data/input';
import OUTPUT from './data/output'
import { calculateResultHelper } from '../../helpers/calculator.helper'
import OutputView from './OuputView'
import InputView from './InputView'
import { SubHeading } from '../../styles/Typography'
import { Button } from '../../styles/Form'
import DMEO_OUTPUT from './data/demoOutput';
import { InputLabelsType, IntroLabelsType, OutputLabelsType } from '../../types';

const Calculator = () => {

    const [inputData, setInputData] = useState<any[]>(INPUT.slice())
    const [outputData, setOutputData] = useState<any[]>(OUTPUT.slice())
    const [shouldStart, setShouldStart] = useState(false)
    const [shouldReveal, setShouldReveal] = useState(true)
    const [shoulReload, setShouldReload] = useState(false)
    const [loading, setLoading] = useState(false)
    const [labels, setLabels] = useState<{
        hasLabels?: boolean,
        introLabels?: IntroLabelsType,
        inputLabels?: InputLabelsType,
        outputLabels?: OutputLabelsType
    }>({})

    useEffect(() => {
        const getIframeData = (e: any) => {
            if (e.data && e.data.hasLabels) {
                setLabels(e.data)
            }
        }
        window.addEventListener('message', getIframeData)

        return () => {
            window.removeEventListener('message', getIframeData)
        }
    }, [])

    useEffect(() => {

        let debounceDelay: any;
        let result: any;

        // Calculating output
        const calculateOutput = () => {
            if (shoulReload) setLoading(true)
            let [dealsize, revenueGoal, dealCnvRate, oppCnvRate, leadsCnvRate, months] = inputData;
            const data = {
                deals: dealsize.val, 
                revenueGoal: revenueGoal.val, 
                dealCnvRate: dealCnvRate.val, 
                oppCnvRate: oppCnvRate.val, 
                leadsCnvRate: leadsCnvRate.val, 
                months: months.val
            }
            result = calculateResultHelper(data);
            setShouldReload(false)
        }

        // Waiting for few ms after changing input and then calculating output
        debounceDelay = setTimeout(() => {
            calculateOutput()
        }, 600)

        // Waiting for few s to show the output and remove the loader
        const outputDelay = setTimeout(() => {
            setLoading(false);

            // Changing the values in output state
            setOutputData(items => {
                items.forEach((item) => {
                    let key = item.name;
                    item.val = result[key]
                    return item;
                })
                return items;
            });
        }, 900);

        return () => {
            // Clearing timeouts in cleanup
            clearTimeout(outputDelay);
            clearTimeout(debounceDelay);
        };
    }, [inputData, shoulReload])


    const handleFieldVal = (key: any, val: any) => {
        if (shouldReveal) setShouldReload(true)
        const newData = [...inputData]
        let idx = newData.findIndex(item => item.id === key)
        newData[idx].val = val;
        setInputData(newData)
    }

    const handleStart = () => {
        setShouldStart(true)
        setShouldReveal(false)
    }

    const handleShowOutput = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setShouldReveal(true)
        }, 1500);
    }

    return (
        <CaculatorContainer>
            {!shouldStart && (
                <BlurOverlay>
                    <SubHeading style={{ marginBottom: '16px' }}>
                        {labels.introLabels?.shouldTry_label || 'Want to know how much activity you need to do to hit number?'}
                    </SubHeading>
                    <Button onClick={handleStart} className='medium'>
                        {labels.introLabels?.shouldTryButton_label || "Yes, Let's try"}
                    </Button>
                </BlurOverlay>
            )}
            <ActionsContainer>
                <InputView
                    inputData={inputData}
                    handleFieldVal={handleFieldVal}
                    labels={labels.inputLabels} />
                <OutputView
                    outputData={!shouldReveal ? DMEO_OUTPUT : outputData}
                    handleShowOutput={handleShowOutput}
                    show={shouldReveal}
                    loading={loading}
                    labels={labels.outputLabels}
                    introLabels={labels.introLabels} />
            </ActionsContainer>
        </CaculatorContainer>
    )
}

export default Calculator