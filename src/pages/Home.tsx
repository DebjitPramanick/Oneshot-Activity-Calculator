import { useEffect, useState } from 'react'
import Calculator from '../components/Calculator'
import { HomeLayout } from '../styles/Layout'

const Home = () => {

    const [data, setdata] = useState('')

    useEffect(() => {
        const getIframeData = (e: any) => {
            if (e.origin !== 'http://localhost:3001') return;
            setdata(JSON.stringify(e.data))
        }
        window.addEventListener('message', getIframeData)

        return () => {
            window.removeEventListener('message', getIframeData)
        }
    }, [])

    return (
        <HomeLayout>
            <h1>Here is the data: {data}</h1>
            <Calculator />
        </HomeLayout>
    )
}

export default Home