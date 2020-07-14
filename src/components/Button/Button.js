import React from 'react'
import classes from './Button.module.css'
import './Rotem.css'

export default function Button({ title, type='button', onClick, miscStyles,  }) {

    const { Btn } = classes

    return (
        <button
            className={Btn}
            style={{ ...miscStyles, }}
            type={type}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
