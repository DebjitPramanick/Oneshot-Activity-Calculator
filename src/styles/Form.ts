import styled from 'styled-components'
import { colors } from './Colors'

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: 0;
    outline: 0;
    font-style: normal;
    font-size: 14px;
    font-weight: bold;
    line-height: 12px;
    letter-spacing: -0.02em;
    cursor: pointer;
    color: #fff;
    transition: 0.5s;
    box-shadow: 0 10px 20px -10px ${colors.shadow};
    background: linear-gradient(135deg, ${colors.gradientA} 0%, ${colors.gradientB} 100%);
    padding: 12px 20px;
    border-radius: 999px;

    &.medium {
        padding: 16px 26px;
        font-size: 16px;
    }
`