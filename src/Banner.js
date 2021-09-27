import React , { useState , useEffect} from 'react'
import request from './request';
import './banner.css'
import HTTP from './axios';
const base_url = "https://image.tmdb.org/t/p/w500/";
function Banner() {
    const [movie, setMovie] = useState([]);
   
    useEffect (()=>{
        async function fetchData(){
            const res = await HTTP.get(request.fecthNetflixOriginals);
             
            setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length -1)]);
            return res;
        }
        fetchData();
    },[]);
   
    return (
        <header className="banner"
        style={{backgroundSize:"cover",
    backgroundImage:`url(${base_url}${movie.backdrop_path})`,
        backgroundPosition:"center center",
}}
        >
        <div className="banner__contents">
            <h1>
              {movie.title || movie.name||movie.original_name}  
            </h1>
            <div className="banner__buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">MyList</button>
            </div>
            <h1 className="banner__description">{movie?.overview}</h1>
        </div>


        </header>
    )
}

export default Banner
