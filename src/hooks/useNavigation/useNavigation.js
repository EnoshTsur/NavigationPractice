import React from 'react'

export default function useNavigation(...components) {

    const [ index, setIndex, ] = React.useState(0) 

    return { current: components[index], setIndex, }
}