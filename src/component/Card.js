import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item, imgSrc, id}) => {
  return (
    <div className="pic-img">
        <Link to={`/sub1/${id}`}>
            <figure>
            <img src={process.env.PUBLIC_URL + imgSrc} alt={item.title} />
            </figure>
        </Link>
        <p className="title">{item.title}</p>
        <p className="author">{item.author}</p>
        <p className="content">{item.content}</p>
    </div>
  )
}

export default Card