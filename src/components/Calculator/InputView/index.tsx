import React from 'react'
import { SubHeading, Text } from '../../../styles/Typography'
import SliderInput from '../../Form/SliderInput'
import { InputsContainer } from '../styles'

interface PropsType {
    inputData: any,
    handleFieldVal: (key: any, val: any) => void;
    labels: any
}

const InputView: React.FC<PropsType> = ({
    handleFieldVal,
    inputData,
    labels
}) => {
    return (
        <InputsContainer>
            <div style={{ marginBottom: 40 }}>
                <SubHeading style={{ marginBottom: 16 }}>Select your input data</SubHeading>
                <Text>Based on these input values, results will be generated.</Text>
            </div>
            {inputData.length && inputData.map((input: any) => (
                <SliderInput
                    key={input.id}
                    label={labels[`${input.name}_label`]}
                    val={input.val}
                    onChange={(val) => handleFieldVal(input.id, val)}
                    max={input.max}
                    min={input.min} />
            ))}
        </InputsContainer>
    )
}

export default InputView