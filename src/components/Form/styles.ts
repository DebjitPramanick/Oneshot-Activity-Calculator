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

export const CustomInput = styled.input`
    padding: 6px 12px;
    outline: 0;
    border: 0;
    color: #4F4F4F;
    background: ${colors.inputBG};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    width: 120px;
    box-sizing: border-box;
    border-radius: 4px;
    -moz-appearance: textfield;

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
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%; 
      background: ${colors.sliderHandler};
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: ${colors.sliderHandler};
      cursor: pointer;
    }

    &::-moz-range-progress {
      background-color: ${colors.sliderHandler};
    }
    &::-ms-fill-lower {
      background-color: ${colors.sliderHandler};
    }

`