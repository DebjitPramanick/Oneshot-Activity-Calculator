import styled from 'styled-components'
import { colors } from '../../styles/Colors'

export const CaculatorContainer = styled.div`
    margin: 20px auto;
    width: 1100px;
    // height: 1500px;
    border-radius: 4px;
    box-shadow: 2px 2px 10px #0000008a;
    background: #fff;
    overflow:hidden;
    position: relative;

    @media(max-width: 1180px){
        width: calc(100% - 112px);
    }

    @media(max-width: 768px){
        width: calc(100% - 60px);
    }

    @media(max-width: 500px){
        width: 100%;
    }
`

export const BlurOverlay = styled.div<{textWidth?: string}>`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    backdrop-filter: blur(8px);
    background: #0000004d;
    z-index: 9;
    text-align: center;

    h1{
        color: #fff;
        width: ${props => props.textWidth || '40%'};
    }
`

export const ActionsContainer = styled.div`
    display: flex;
    height: 100%;

    @media(max-width: 768px){
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
    background: linear-gradient(135deg, ${colors.gradientA} 0%, ${colors.gradientB} 100%);
    position: relative;
    
    p, h1, a {
        color: #fff;
    }
`
export const OutputData = styled.div`
    margin-top: 30px;

    @media(max-width: 768px){
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`
export const OutputDataItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    gap: 16px;

    & .op-data-label-container {
        display: flex;
        gap: 10px;
        flex-basis: calc(100% - 80px);
        color: #ffffffc9;
    }
    & .op-data-label {
        color: #ffffffc9;
    }
    & .op-data-val {
        font-weight: bold
    }
`

export const CircleDataContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`

export const RowDataContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const MainData = styled.div`
    aspect-ratio : 1 / 1;
    width: 280px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    border-radius: 50%;
    font-size: 30px;
    box-shadow: -2px -2px 10px #7e88e6, 2px 2px 10px #0000008a;
    // background: linear-gradient(135deg, ${colors.gradientA} 0%, ${colors.gradientB} 100%);

    & .highlight-text {
        font-size: 36px;
        font-weight: bold;
        color: #fff;

        @media(max-width: 1180px) {
            font-size: 30px;
        }
    
        @media(max-width: 1050px) {
            font-size: 26px;
        }

        @media(max-width: 768px) {
            font-size: 30px;
        }

        @media(max-width: 445px){
            font-size: 26px;
        }
    }

    @media(max-width: 1180px) {
        width: 240px;
    }

    @media(max-width: 1050px) {
        width: 200px;
    }

    @media(max-width: 768px) {
        width: 260px;
    }

    @media(max-width: 445px){
        width: 200px;
    }
`

export const MessageBox = styled.div`
    margin: 20px 0 30px 0;
    padding: 16px;
    background: linear-gradient(135deg, ${colors.gradientA} 0%, ${colors.gradientB} 100%);
    border-radius: 4px;
    color: #fff;
    box-shadow: 0 10px 20px -10px ${colors.shadow};

    p,a {
        font-size: 14px;
    }
`