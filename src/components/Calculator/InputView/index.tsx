import React from 'react'
import { SubHeading, Text } from '../../../styles/Typography'
import SliderInput from '../../Form/SliderInput'
import { InputsContainer } from '../styles'

interface PropsType {
    fieldsData: any,
    handleFieldVal: (key: any, val: any) => void
}

const InputView: React.FC<PropsType> = ({
    handleFieldVal,
    fieldsData
}) => {
    return (
        <InputsContainer>
            <div style={{marginBottom: 40}}>
                <SubHeading style={{marginBottom: 16}}>Select your input data</SubHeading>
                <Text>Based on these input values, results will be generated.</Text>
            </div>
            {fieldsData.map((field: any) => (
                <SliderInput
                    key={field.id}
                    label={field.title}
                    val={field.val}
                    onChange={(val) => handleFieldVal(field.id, val)}
                    max={field.max}
                    min={field.min} />
            ))}
        </InputsContainer>
    )
}

export default InputView