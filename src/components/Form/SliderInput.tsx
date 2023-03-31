import React from 'react'
import { Text } from '../../styles/Typography'
import { Input, InputContainer, InputFieldContainer, LabelFlex, RangeSlider } from './styles'
import { addCommaToNumber, isValidInput, formatToNumber, getBracketLabel } from '../../helpers/calculator.helper'
import { getInputIcon } from '../../helpers/icons.helper'
interface PropsType {
    label: string,
    name?: string,
    val: any,
    onChange: (val: any) => void,
    min?: number,
    max?: number,
    type?: 'percentage' | 'number'
}

const SliderInput: React.FC<PropsType> = ({
    label,
    name = '',
    val,
    onChange,
    min = 1,
    max = 10000000,
    type = 'number'
}) => {

    const changeHandler = (e: any) => {
        let value = e.target.value;
        if (!isValidInput(value)) return;
        value = formatToNumber(value)
        if (value > max) value = max;
        if (value < min) value = min;
        value = addCommaToNumber(value)
        onChange(value)
    }

    return (
        <InputContainer>
            <LabelFlex>
                <Text>
                    {label} 
                    <span>{type === 'percentage' && ` ${getBracketLabel(name, val)}`}</span>
                </Text>
                <InputFieldContainer>
                    {getInputIcon(name, 16)}
                    <Input
                        value={addCommaToNumber(val)}
                        onChange={changeHandler}
                        type="text"
                        style={{padding: '6px 12px 6px 4px'}} />
                </InputFieldContainer>

            </LabelFlex>
            <RangeSlider type="range" min={min} max={max} value={formatToNumber(val)} onChange={changeHandler} />

        </InputContainer>
    )
}

export default SliderInput