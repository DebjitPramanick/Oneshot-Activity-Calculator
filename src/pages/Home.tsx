import { useEffect, useState } from 'react'
import Calculator from '../components/Calculator'
import { HomeLayout } from '../styles/Layout'

const Home = () => {

    const [data, setdata] = useState('')

    useEffect(() => {
        window.addEventListener('message', function (event) {
            var origin = event.origin; // For Chrome, the origin property is in the event.originalEvent object.
            console.log("ORIGIN", origin)
            if (origin !== 'https://ld15l5.csb.app/')
                return;
            if (typeof event.data === 'object' && event.data.call === 'sendValue') {
                console.log("DATA", event.data.value)
                setdata(JSON.stringify(event.data.value))
                // Do something with event.data.value;
            }
        }, false);
    }, [])

    return (
        <HomeLayout>
            <h1>Here is the data {data}</h1>
            <Calculator />
        </HomeLayout>
    )
}

export default Home