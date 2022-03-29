import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    /*const handleAdd = () => {
        // setCategories([...categories].concat('Security'));
        // setCategories([...categories, 'Security']);
        setCategories(cats => [...cats, 'Security']);
    }*/
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            
            <ul>
            {
                categories.map(category => (
                    <GifGrid category={category} key={category} />
                ))
            }
            </ul>  
        </>
    );
}
