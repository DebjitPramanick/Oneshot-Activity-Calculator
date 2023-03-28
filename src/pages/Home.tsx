import React from 'react'
import Calculator from '../components/Calculator'
import { HomeHeader, HomeLayout } from '../styles/Layout'

const Home = () => {
    return (
        <HomeLayout>
            <HomeHeader>
                <Calculator />
            </HomeHeader>
        </HomeLayout>
    )
}

export default Home