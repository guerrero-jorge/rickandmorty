import React from 'react';
import ResidentInfo from './ResidentInfo';
import { useState,useEffect } from 'react';

const ResidentList = ({location,setPage,page}) => {

    


    
    const characterPerPage=8;
    const lastIndex=page*characterPerPage;
    const firstIndex=lastIndex-characterPerPage;
    const paginatedCharacters=location.residents?.slice(firstIndex,lastIndex);
    const totalPages=Math.ceil(location.residents?.length/characterPerPage);
 

    return (
        <>
        
        <div className='contResidentList'>

            {
                paginatedCharacters?.map(resident=><ResidentInfo resident={resident} key={resident}/> )
                /*location.residents?.map(resident=><ResidentInfo resident={resident} key={resident}/> )*/
            }

        </div>

        <div className='botoneInferiores'>

            {
                location.residents?.length>0 ? (
                    <>
                        
                        {
                            page!==1 &&(
                            <button onClick={()=>setPage(page-1)}><i class="fa-solid fa-circle-left"></i></button>
                            )
                        }

                        <span>{page} / {totalPages}</span>

                        {
                             page!==totalPages &&(
                            <button onClick={()=>setPage(page+1)}><i class="fa-solid fa-circle-right"></i></button>
                             )
                        }

                    </>  

                ):(
                    
                    <div>0 / 0</div>
                )

            }



           
            
        </div>
        
        </>
       
    );
};

export default ResidentList;