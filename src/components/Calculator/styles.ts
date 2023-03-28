import styled from 'styled-components'
import { colors } from '../../styles/Colors'

export const CaculatorContainer = styled.div`
    position: absolute;
    top: 80%;
    left: 0;
    right: 0;
    margin: auto;
    width: 1100px;
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 #0000001a;
    background: #fff;

    @media(max-width: 1180px){
        width: calc(100% - 112px);
    }

    @media(max-width: 800px){
        padding: 20px 0 0;
        width: 100%;
    }
`

export const ActionsContainer = styled.div`
    display: flex;

    @media(max-width: 800px){
        gap: 0;
        flex-direction: column;
    }
`
export const InputsContainer = styled.div`
    flex-basis: 50%;
    padding: 30px;
`

export const OutputsContainer = styled.div`
    flex-basis: 50%;
    padding: 30px;
    background: ${colors.sliderHandler};
    
    p, h1, a {
        color: #fff;
    }
`
export const OutputData = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px
`
export const OutputDataItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    & .op-data-label {
        color: #fff;
    }
    & .op-data-val {
        font-weight: bold
    }
`

export const EmailData = styled.div`
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    border-radius: 50%;
    border: 6px solid #fff;
    font-size: 30px;
    color: #fff;

    & .email-large {
        font-size: 30px;
        color: #fff;
    }
`