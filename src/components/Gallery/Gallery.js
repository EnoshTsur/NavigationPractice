import React from 'react'
import useGet from '../../hooks/useGet/useGet'
import Button from '../Button/Button'
import useImages from '../../hooks/useImages/useImages'
import useRequest from '../../hooks/useRequest/useRequest'

export default function Gallery() {

    const { request, callRequest, } = useRequest()

    const { data, loading, error, } = useGet('https://random.dog/woof.json', request)
    
    const { 
        
        currentImage, 
        incrementIndex, 
        decrementIndex,
        isStart,
        isNewImage,

    } = useImages(data)


    return (
        <div>
            <h1>Gallery</h1>
            <img style={{ maxWidth: '20rem', maxHeight: '20rem' }} src={currentImage} />

            <Button
                title="back"
                disabled={isStart()}
                onClick={decrementIndex}
            />

            <Button
                title="next"
                onClick={() => {
                    incrementIndex()
                    isNewImage() && callRequest()
                }} />

        </div>
    )
}
