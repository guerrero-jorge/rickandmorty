import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setLocation,setPage}) => {

    const [id,setId]=useState("");

    const search=()=>{

        setPage(1);
        axios
        .get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res=>setLocation(res.data));  


    }


    return (
        <div className='Searchbox'>

            <input 
                type="text" placeholder='Type a location id'
                onChange={e=>setId(e.target.value)} 
                value={id} 
            />
           <button onClick={search}>Search</button>
            
        </div>
    );
};

export default SearchBox;