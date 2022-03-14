import React from 'react';


const LocationInfo = ({location}) => {
    return (
        <div className='contLocation'>

            <p>{location.name}</p>
            <span><b>Type: </b>{location.type} </span>
           
            <span><b>Dimension: </b>{location.dimension} </span>
          
            <span><b>Population: </b>{location.residents?.length} </span>

            
        </div>
    );
};

export default LocationInfo;