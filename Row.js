import React, { useEffect, useState } from 'react';
import axios from "./axios";
import "./row.css"


function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
     
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl] );
    console.table(movies); 

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map((movie)=>(
                <img 
                key={movie.id}
                className={isLargeRow?"row_poster_large" : "row_poster"}
                src={isLargeRow? 'https://image.tmdb.org/t/p/original/'+movie.poster_path: 'https://image.tmdb.org/t/p/original/'+movie.backdrop_path}
                alt={movie.name}
                /> 
            ))}

        </div>

      
    </div>
  )
}

export default Row
