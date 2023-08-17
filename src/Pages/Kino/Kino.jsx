import React from 'react'
import "./Kino.css"
import { useParams } from 'react-router-dom'

const Kino = () => {
    const params = useParams()
    console.log(params);
    return (
        <div>
            Kino
        </div>
    )
}

export default Kino
