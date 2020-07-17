import React from 'react'
import useGet from '../../hooks/useGet/useGet'
import Button from '../Button/Button'

export default function Gallery() {

    const [toggleRequest, setToggle] = React.useState(false)

    const [images, setImages,] = React.useState([])
    const [index, setIndex,] = React.useState(0)

    const { data, loading, error, } = useGet('https://random.dog/woof.json', toggleRequest)

    // ['sdf']

    React.useEffect(() => {
        if (data) { setImages([...images, data]) }
    }, [data])


    return (
        <div>
            <h1>Gallery</h1>
            <img style={{ maxWidth: '20rem', maxHeight: '20rem' }} src={images[index]} />

            <Button
                title="back"
                disabled={index === 0}
                onClick={() => setIndex(pre => --pre)}
            />

            <Button
                title="next"
                onClick={() => {
                    setIndex(pre => ++pre)
                    if (index >= images.length - 1) {
                        setToggle(pre => !pre)
                    }
                }} />

        </div>
    )
}
