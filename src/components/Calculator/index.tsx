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

const Calculator = () => {

    const [inputData, setInputData] = useState<any[]>(INPUT.slice())
    const [outputData, setOutputData] = useState<any[]>(OUTPUT.slice())
    const [shouldStart, setShouldStart] = useState(false)
    const [shouldReveal, setShouldReveal] = useState(true)
    const [shoulReload, setShouldReload] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        let debounceDelay: any;
        let result: any;

        // Calculating output
        const calculateOutput = () => {
            if (shoulReload) setLoading(true)
            let [dealsize, revenueGoal, dealCnvRate, oppCnvRate, leadsCnvRate] = inputData;
            result = calculateResultHelper(dealsize.val, revenueGoal.val, dealCnvRate.val, oppCnvRate.val, leadsCnvRate.val);
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
        }, 1500);

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
                    <SubHeading style={{ marginBottom: '16px' }}>Want to know how much activity you have to do?</SubHeading>
                    <Button onClick={handleStart} className='medium'>Yes, Let's try</Button>
                </BlurOverlay>
            )}
            <ActionsContainer>
                <InputView inputData={inputData} handleFieldVal={handleFieldVal} />
                <OutputView
                    outputData={!shouldReveal ? DMEO_OUTPUT : outputData}
                    handleShowOutput={handleShowOutput}
                    show={shouldReveal}
                    loading={loading} />
            </ActionsContainer>
        </CaculatorContainer>
    )
}

export default Calculator