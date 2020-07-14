import React from 'react'

export default function useNavigation(...nameAndComponent) {


    const [ index, setIndex, ] = React.useState(0) 

    function getCurrent() {
        return nameAndComponent[index]?.component
    }

    function getNames() {
        return nameAndComponent.map(obj => obj?.name)
    }

    return { getCurrent, getNames, setIndex, }
}