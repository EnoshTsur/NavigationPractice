import React from 'react'

const initialValues = Object.freeze({
    data: null,
    error: null,
    loading: true,
})

export default function useGet(url) {

    const [response, setResponse] = React.useState({ ...initialValues })

    React.useEffect(() => {
        async function getData() {
            const data = await fetch(url)
            return await data.json()
        }

        getData()
            .then(({ url }) => setResponse({...response, data: url, loading: false}))
            .catch(error => setResponse({...response, error, loading: false}))
    }, [])

    return response
}