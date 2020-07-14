import React from 'react'
import Button from '../Button/Button'

// values via hook
// validation empty errors via hook


export default function Sign() {
    return (
        <form onSubmit={event => {
            event.preventDefault()
            
        }}>
            <input type="text"/>
            <input type="password"/>
            <Button type="submit" title="submit" />
        </form>
    )
}
