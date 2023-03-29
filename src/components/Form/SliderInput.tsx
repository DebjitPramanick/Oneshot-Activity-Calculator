import React from 'react'
import { Text } from '../../styles/Typography'
import { CustomInput, InputContainer, LabelFlex, RangeSlider } from './styles'

interface PropsType {
    label: string,
    val: any,
    onChange: (val: any) => void,
    min?: number,
    max?: number
}

const SliderInput: React.FC<PropsType> = ({
    label,
    val,
    onChange,
    min = 1,
    max = 10000000
}) => {

    const changeHandler = (e: any) => {
        let value = e.target.value;
        if(value > max) value = max;
        if(value < min) value = min;
        onChange(value)
    }

    return (
        <InputContainer>
            <LabelFlex>
                <Text>{label}</Text>
                <CustomInput value={val} onChange={changeHandler} type="number"/>
            </LabelFlex>
            <RangeSlider type="range" min={min} max={max} value={val} onChange={changeHandler} />

        </InputContainer>
    )
}

export default SliderInput