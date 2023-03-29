import React from 'react'
import Calculator from '../components/Calculator'
import { HeaderOverlay, HeaderOverlayContent, HomeHeader, HomeLayout } from '../styles/Layout'
import { Heading, Text } from '../styles/Typography'

const Home = () => {
    return (
        <HomeLayout>
            <Calculator />
            {/* <HomeHeader>
                <HeaderOverlay>
                    <HeaderOverlayContent>
                        <Heading>Activity Calculator</Heading>
                        <Text style={{marginTop: '20px'}}>
                            Activity calculator for SDR/AE - input your target, average deal size, and we can tell you 
                            how many opps and meetings you need then activity
                        </Text>
                    </HeaderOverlayContent>
                </HeaderOverlay>
                <Calculator />
            </HomeHeader> */}
            {/* <div style={{marginTop: '600px'}}></div> */}
        </HomeLayout>
    )
}

export default Home