import React from 'react'
import Button from '../Button/Button'
import classes from './Navigation.module.css'
import useNavigation from '../../hooks/useNavigation/useNavigation'
import Home from '../Home/Home'
import About from '../About/About'
import Signin from '../Signin/Signin'
import Gallery from '../Gallery/Gallery'


export default function NavigationView() {

    const { getCurrent, getNames, setIndex, } = useNavigation(
        { name: 'Home', component: <Home /> },
        { name: 'About', component: <About />},
        { name: 'Signin', component: <Signin />},
        { name: 'Gallery', component: <Gallery />}
    )

    const { Nav } = classes

    return (
        <>
            <div className={Nav}>
                {
                    getNames().map((header, i) => (
                        <Button
                            key={header}
                            title={header}
                            miscStyles={{ margin: '0.3rem' }}
                            onClick={() => setIndex(i)}
                        />
                    ))
                }
            </div>
            {getCurrent()}
        </>


    )
}
