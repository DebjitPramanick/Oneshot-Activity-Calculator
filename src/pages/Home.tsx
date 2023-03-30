import { useEffect } from 'react'
import Calculator from '../components/Calculator'
import { HomeLayout } from '../styles/Layout'

const Home = () => {

    useEffect(() => {
        window.addEventListener('message', function (event) {
            var origin = event.origin; // For Chrome, the origin property is in the event.originalEvent object.
            console.log("ORIGIN", origin)
            if (origin !== 'https://ld15l5.csb.app/')
                return;
            if (typeof event.data == 'object' && event.data.call == 'sendValue') {
                console.log("DATA", event.data.value)
                // Do something with event.data.value;
            }
        }, false);
    }, [])

    return (
        <HomeLayout>
            <Calculator />
        </HomeLayout>
    )
}

export default Home