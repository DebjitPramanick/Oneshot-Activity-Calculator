import { useState, useEffect } from 'react'
import SliderInput from '../Form/SliderInput'
import { ActionsContainer, CaculatorContainer, InputsContainer } from './styles'
import FieldsData from './fieldsData'
import { calculateResultHelper } from '../../helpers/calculator.helper'
import OutputView from './OuputView'
import InputView from './InputView'

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
        const calculateOutput = () => {
            let [dealsize, revenueGoal, dealCnvRate, oppCnvRate, leadsCnvRate] = fieldsData;
            const result = calculateResultHelper(dealsize.val, revenueGoal.val, dealCnvRate.val, oppCnvRate.val, leadsCnvRate.val)
            setOutputData(result)
        }

        calculateOutput()
    }, [fieldsData])


    const handleFieldVal = (key: any, val: any) => {
        const newData = [...fieldsData]
        let idx = newData.findIndex(item => item.id === key)
        newData[idx].val = val;
        setFieldsData(newData)
    }

    return (
        <CaculatorContainer>
            <ActionsContainer>
                <InputView fieldsData={fieldsData} handleFieldVal={handleFieldVal}/>
                <OutputView outputData={outputData} />
            </ActionsContainer>
        </CaculatorContainer>
    )
}

export default Calculator