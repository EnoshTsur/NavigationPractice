import React from 'react'

export default function useRequest(){
    
    const [ request, setRequest, ] = React.useState(false)

    function callRequest() {
        setRequest(pre => !pre)
    }

    return { request, callRequest, }
}