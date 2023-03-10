import React,{useEffect,useState}from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
const Rowpost = (props) => {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
     

    })

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("no trailor");
        }
      });
  };
  return (
    <div className='row'>
        <h2 style={{color:'red'}}>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj,key)=>
            <img  onClick={()=>handleMovie(obj.id)}className={props.isSmall?'smallposter':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>

          )}

            
           
           
        </div>
        {urlId &&<Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default Rowpost