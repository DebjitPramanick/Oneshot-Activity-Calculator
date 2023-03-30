import { useState, useEffect } from 'react'
import { ActionsContainer, BlurOverlay, CaculatorContainer } from './styles'
import FieldsData from './fieldsData'
import { calculateResultHelper } from '../../helpers/calculator.helper'
import OutputView from './OuputView'
import InputView from './InputView'
import { SubHeading } from '../../styles/Typography'
import { Button } from '../../styles/Form'

const initialOutput = {
    customers: 0,
    opportunities: 0,
    meetings: 0,
    leads: 0,
    emails: 0
}

const Calculator = () => {

    const [fieldsData, setFieldsData] = useState(FieldsData)
    const [outputData, setOutputData] = useState(initialOutput)
    const [shouldStart, setShouldStart] = useState(false)
    const [shouldReveal, setShouldReveal] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const calculateOutput = () => {
            if(shouldStart) setLoading(true)
            let [dealsize, revenueGoal, dealCnvRate, oppCnvRate, leadsCnvRate] = fieldsData;
            const result = calculateResultHelper(dealsize.val, revenueGoal.val, dealCnvRate.val, oppCnvRate.val, leadsCnvRate.val)
            setOutputData(result)
        }

        calculateOutput()

        const timeoutID = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [fieldsData, shouldStart])


    const handleFieldVal = (key: any, val: any) => {
        const newData = [...fieldsData]
        let idx = newData.findIndex(item => item.id === key)
        newData[idx].val = val;
        setFieldsData(newData)
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
                    <Button onClick={handleStart}>Yes, Let's try</Button>
                </BlurOverlay>
            )}
            <ActionsContainer>
                <InputView fieldsData={fieldsData} handleFieldVal={handleFieldVal} />
                <OutputView
                    outputData={outputData}
                    handleShowOutput={handleShowOutput}
                    show={shouldReveal}
                    loading={loading} />
            </ActionsContainer>
        </CaculatorContainer>
    )
}

export default Calculator