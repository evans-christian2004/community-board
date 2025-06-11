import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt="post image" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a href={props.link} target="_blank"><button>See More</button></a>
    </div>
  )
}

export default Card