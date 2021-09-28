import React , { useState , useEffect} from 'react'
import request from './request';
import './banner.css'
import HTTP from './axios';
const base_url = "https://image.tmdb.org/t/p/original/";
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
   const truncate = (str, n) =>str?.length > n ? str.substr(0, n-1)+"..." : str;
   const img = `url(${base_url}${movie?.backdrop_path})`;
   console.log(movie);
    return (
        
        <header className="banner"
        style={{backgroundSize:"cover",
    backgroundImage:img,
    backgroundPosition: "center center"
        
}}
        >
        <div className="banner__contents">
            <h1 className="banner__title">
              {movie?.title || movie?.name||movie?.original_name}  
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">MyList</button>
            </div>
            <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="banner--fadebottom">
            </div>

        </header>
    )
}

export default Banner
