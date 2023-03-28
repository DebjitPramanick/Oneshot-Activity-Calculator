import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: 0;
    outline: 0;
    width: 150px;
    height: 39px;
    border-radius: 4px;
    font-style: normal;
    font-size: 14px;
    line-height: 12px;
    letter-spacing: -0.02em;
    cursor: pointer;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    transition: 0.5s;

    &:hover {
        background: #fff;
        color: #000;
        border: #fff;
    }
`