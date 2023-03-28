import styled from 'styled-components'

const HeaderBG = require("../assets/meeting.jpg") 

export const HomeLayout = styled.div`
    padding-bottom: 40px;
    min-height: 100vh;
`

export const HomeHeader = styled.div`
    background: url(${HeaderBG});
    height: 300px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`
export const HeaderOverlay = styled.div`
    position: absolute;
    margin-top: -90px;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-image: linear-gradient(360deg, #000000cc, #00000029);
    left: 0;
    right: 0;
`
export const HeaderOverlayContent = styled.div`
    width: 1100px;
    margin: auto;
    
    h1,p{
        color: #fff
    }

    @media(max-width: 1180px){
        width: calc(100% - 112px);
    }

    @media(max-width: 800px){
        width: calc(100% - 60px);
    }
`


