import React from 'react'
import Button from '../Button/Button'
import useForm from '../../hooks/useForm/useForm'

// values via hook
// validation empty errors via hook


export default function Sign() {

    const { values, onChange, handleSubmit, errors, onBlur,  } =
        useForm({ name: '', password: '' }, onSubmit)

    function onSubmit() {
        console.log('!!! ', values)
    }


    return (
        <form onSubmit={event => handleSubmit(event)}>
            <div>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
            <label>{errors?.name}</label>
            <div>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
            <label>{errors?.password}</label>
            <div>
                <Button type="submit" title="submit" />
            </div>
        </form>
    )
}
