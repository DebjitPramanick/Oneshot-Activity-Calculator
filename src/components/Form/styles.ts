import styled from 'styled-components'
import { colors } from '../../styles/Colors'


export const InputContainer = styled.div`
    margin-bottom: 30px;
    width: 100%;
`

export const LabelFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    gap: 10px;
`

export const InputFieldContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0px;
    color: ${colors.text};
    background: ${colors.inputBG};
    box-sizing: border-box;
    border-radius: 4px;
    min-width: 134px;
    width: 134px;
    padding: 0 6px;

    & .prefix {
      width: fit-content;
      color: #7e7e7e;
      margin-left: auto;
      overflow: visible;
      text-overflow: none;
    }
`

export const Input = styled.input`
    padding: 6px 12px;
    outline: 0;
    border: 0;
    color: ${colors.text};
    background: ${colors.inputBG};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    box-sizing: border-box;
    border-radius: 4px;
    -moz-appearance: textfield;
    width: 100%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
`

export const RangeSlider = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 3px;
    border-radius: 5px;  
    background: ${colors.rangeInputBG};
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;

    &::-webkit-slider-runnable-track{
      cursor: pointer;
    }

    &::-moz-range-track{
      cursor: pointer;
    }
  
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%; 
      background: ${colors.gradientB};
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: ${colors.gradientB};
      cursor: pointer;
    }

    &::-moz-range-progress {
      background: linear-gradient(135deg, ${colors.gradientA} 0%, ${colors.gradientB} 100%);
    }
    &::-ms-fill-lower {
      background: linear-gradient(135deg, ${colors.gradientA} 0%, ${colors.gradientB} 100%);
    }

`