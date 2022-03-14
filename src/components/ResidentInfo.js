
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const ResidentInfo = ({resident}) => {

   
    const fondo=()=>{


        if (residentInfo.status==="Alive"){

             return "rgb(5, 238, 5)"
        }else if(residentInfo.status==="Dead"){

            return "rgb(238, 3, 3)"

        }else{

            return "rgb(224, 214, 214)"
        }

    }

    

    const [residentInfo, setResidentInfo]=useState({})

    useEffect(()=>{

        axios  
            .get(resident)
            .then(
                res=>{
                    setResidentInfo(res.data)
                    console.log(res.data)
                }
            )
            
    },[])



    return (
        <div className='column'>
            <div className='card' >
               
                <img src={residentInfo.image} alt="Picture not found" style={{borderColor:fondo()}}/>
                <div className='infocard'>
                    <h3>{residentInfo.name}</h3>
                    <p>{residentInfo.status}</p>
                    <p>Origin: {residentInfo.origin?.name}</p>
                    <p>Episodes where appear: {residentInfo.episode?.length}</p>
                </div>
               
            </div>  
        </div>
    );
};

export default ResidentInfo;