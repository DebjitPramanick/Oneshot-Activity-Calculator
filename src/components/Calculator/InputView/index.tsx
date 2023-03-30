import React from 'react'
import { SubHeading, Text } from '../../../styles/Typography'
import SliderInput from '../../Form/SliderInput'
import { InputsContainer } from '../styles'

interface PropsType {
    inputData: any,
    handleFieldVal: (key: any, val: any) => void
}

const InputView: React.FC<PropsType> = ({
    handleFieldVal,
    inputData
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
                    label={input.title}
                    val={input.val}
                    onChange={(val) => handleFieldVal(input.id, val)}
                    max={input.max}
                    min={input.min} />
            ))}
        </InputsContainer>
    )
}

export default InputView