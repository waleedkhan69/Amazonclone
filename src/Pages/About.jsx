import React from 'react'
import { useLocation } from 'react-router-dom'


const About = () => {

    const location = useLocation()
    const arr = location.state.goingArray
    

    console.log(location)
    return (
        <div>About
            <h1>name :{arr.name}</h1>
            <h1>age :{arr.age}</h1>
            <h1>img :{arr.image}</h1>
        </div>
    )
}

export default About