import React from 'react'
import Home from '../Home/Home'
import About from '../About/About'
import Signin from '../Signin/Signin'
import Gallery from '../Gallery/Gallery'

export default function Navigation({ index }) {
    
    const components = Object.freeze([
        <Home />,
        <About />,
        <Signin />,
        <Gallery/>
    ])

    return (
        <>
            { components[index] }
        </>
    )
}
