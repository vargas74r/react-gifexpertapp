import React, { useEffect, useState } from "react";

import { GifGridItem } from "./GifGridItem";
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
  // const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);
  
  useEffect(() => 
    getGifs(category)
      .then( setImages ), [category]);

  /*const getGifs = async () => {
    const apiKey = 'MbX8fXoiZXWSyIc2JDwkscIszSu4w1E2';
    const limit = 6;
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&rating=g&limit=${limit}&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    // console.log(gifs);
    setImages(gifs);
  };*/
  // getGifs();

  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
        {/* <h4>{ count }</h4>
        <button onClick={ ()=> setCount(count + 1) }>Counter</button> */}

        {/* <ol>
          { images.map( ({ id, title }) => (<li key={ id }>{ title }</li>) ) }
        </ol> */}
        { images.map( img => (
            <GifGridItem 
              key={ img.id } 
              // img={ img } 
              { ...img } 
            />
          )) 
        }
      </div>
    </>
  );
};
