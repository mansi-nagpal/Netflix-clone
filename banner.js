import React, { useEffect, useState } from 'react';
import axios from "./axios";
import requests from './request';
import "./banner.css"


function Banner() {
    const [movie,setMovie]=useState([]);

    useEffect(()=>{ 
     
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
            return request;
        }
        fetchData();
    },[] );
    const truncateDescription = (str, n) => {
        return ((str?.length > n) ? str.substring(0, n-1) + '...' : str)
    }
  return (
    <div className='banner' 
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"

    }}

    
    >
    
        <div className='banner_contents'>
            <h1 className='banner_title'>{movie.name}</h1>
            <div>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='banner_description'> {truncateDescription(movie?.overview, 200)}</h1>
            

        </div>
        <div className='banner-fadeBottom' />
    </div>

  )
}

export default Banner
