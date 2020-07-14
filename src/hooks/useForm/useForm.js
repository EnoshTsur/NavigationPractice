import React from 'react'

export default function useForm(initalValues, onSubmit) {

    const [values, setValues,] = React.useState(initalValues)
    const [errors, setErrors,] = React.useState({})

    function onChange(event) {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    function onBlur() {
        setErrors(validate())
    }

    function validate() {
        return Object.fromEntries(
            Object.entries(values)
                .filter(([_, v]) => v === '')
                .map(([k, _]) => [k, `${k} should not be emoty`])
        )
    }

    function clean() {
        setValues(
            Object.fromEntries([
                ...Object.entries(values).map(([k, _]) => [k, ''])
            ])
        )
    }

    function handleSubmit(event) {
        event.preventDefault()
        setErrors(validate())
        onSubmit()
        clean()
    }

    return { values, onChange, handleSubmit, clean, errors, onBlur }

}