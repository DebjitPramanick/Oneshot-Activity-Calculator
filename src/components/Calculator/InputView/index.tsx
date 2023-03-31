import React from 'react'
import { SubHeading, Text } from '../../../styles/Typography'
import SliderInput from '../../Form/SliderInput'
import { InputsContainer } from '../styles'
import { InputLabelsType } from '../../../types';

interface PropsType {
    inputData: any,
    handleFieldVal: (key: any, val: any) => void;
    labels?: InputLabelsType
}

const InputView: React.FC<PropsType> = ({
    handleFieldVal,
    inputData,
    labels
}) => {

    const getInputLabel = (key: string, altLabel: string) => {
        let label = altLabel;
        if(labels) label = (labels as any)[`${key}_label`]
        return label;
    }

    return (
        <InputsContainer>
            <div style={{ marginBottom: 40 }}>
                <SubHeading style={{ marginBottom: 16 }}>{labels?.heading_label || 'Select your input data'}</SubHeading>
                <Text>{labels?.subheading_label || 'Based on these input values, results will be generated.'}</Text>
            </div>
            {inputData.length && inputData.map((input: any) => (
                <SliderInput
                    key={input.id}
                    label={getInputLabel(input.name, input.label)}
                    name={input.name}
                    val={input.val}
                    onChange={(val) => handleFieldVal(input.id, val)}
                    type={input.type}
                    max={input.max}
                    min={input.min} />
            ))}
        </InputsContainer>
    )
}

export default InputView