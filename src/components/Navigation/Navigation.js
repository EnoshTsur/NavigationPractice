import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Signin from '../Signin/Signin'

export default function Navigation({ index }) {
    
    const components = Object.freeze([
        <Home />,
        <About />,
        <Signin />
    ])

    return (
        <>
            { components[index] }
        </>
    )
}
