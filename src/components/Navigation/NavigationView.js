import React from 'react'
import Button from '../Button/Button'
import classes from './Navigation.module.css'


export default function NavigationView({ headers, render, }) {

    const [ index, setIndex, ] = React.useState(0)

    const { Nav } = classes

    return (
        <>
            <div className={Nav}>
                {
                    headers.map((header, i) => (
                        <Button
                            key={header}
                            title={header}
                            miscStyles={{ margin: '0.3rem' }}
                            onClick={() => setIndex(i)}
                        />
                    ))
                }
            </div>
            { render(index) }
        </>


    )
}
