import { useState, useEffect } from 'react'
import SliderInput from '../Form/SliderInput'
import { ActionsContainer, CaculatorContainer, InputsContainer } from './styles'
import FieldsData from './fieldsData'
import { calculateResultHelper } from '../../helpers/calculator.helper'
import OutputView from './OuputView'

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

    useEffect(() => {
        calculateOutput()
    }, [fieldsData])


    const handleFieldVal = (key: any, val: any) => {
        const newData = [...fieldsData]
        let idx = newData.findIndex(item => item.id === key)
        newData[idx].val = val;
        setFieldsData(newData)
    }

    const calculateOutput = () => {
        let [dealsize, revenueGoal, dealCnvRate, oppCnvRate, leadsCnvRate] = fieldsData;
        const result = calculateResultHelper(dealsize.val, revenueGoal.val, dealCnvRate.val, oppCnvRate.val, leadsCnvRate.val)
        setOutputData(result)
    }

    return (
        <CaculatorContainer>
            <ActionsContainer>
                <InputsContainer>
                    {fieldsData.map(field => (
                        <SliderInput
                            key={field.id}
                            label={field.title}
                            val={field.val}
                            onChange={(val) => handleFieldVal(field.id, val)}
                            max={field.max}
                            min={field.min} />
                    ))}
                </InputsContainer>
                <OutputView outputData={outputData}/>
            </ActionsContainer>
        </CaculatorContainer>
    )
}

export default Calculator