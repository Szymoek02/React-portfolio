import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './App.css'

export default function stars(props)
{
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
        <div className="rating">
            {
                [...Array(props.length)].map((_, index) => {
                    index += 1
                    return (
                        <FaStar key={index} 
                        className={(index <= rating) || (index <= hover) ? 'active' : 'inactive'}
                        onClick={() => {setRating(index)}}
                        onMouseMove={() => {setHover(index)}}
                        onMouseLeave={() => {setHover(rating)}}
                        size={props.size}></FaStar>
                    )
                })
            }
        </div>
    )
}