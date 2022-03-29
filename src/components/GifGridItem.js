import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
        <figure>
            <img src={ url } alt={ title } />
            <figcaption>{ title }</figcaption>
        </figure>
    </div>
  )
}
