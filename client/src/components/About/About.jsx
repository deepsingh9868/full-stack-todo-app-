import { useEffect, React } from 'react';
import axios from "axios";


const About = () => {
    useEffect(() => {
        axios.get('http://localhost:5000/user/login').then((response) => {
            console.log(response);
        })
    }, [])

    return (
        <>
            <h1>Getting all the todos here</h1>
        </>
    )
}

export default About
