import React from 'react'

export default function useImages(data) {

    const [images, setImages,] = React.useState([])
    const [index, setIndex,] = React.useState(0)

    React.useEffect(() => {
        if (data) { setImages([...images, data]) }
    }, [data])

    function incrementIndex() {
        setIndex(pre => ++pre)
    }

    function decrementIndex() {
        setIndex(pre => --pre)
    }

    function isStart() {
        return index === 0
    }

    function isNewImage(){
        return index >= images.length - 1
    }

    return {
        incrementIndex,
        decrementIndex,
        isStart,
        isNewImage,
        currentImage: images[index],

    }
}