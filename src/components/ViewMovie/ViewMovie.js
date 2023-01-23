


import './ViewMovie.scss'


import {useParams,useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import NavBar from '../navbar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';




const ViewMovie = ()=>{
    const {Id}=useParams();
    const navigate=useNavigate()
    console.log(useParams)
  const [movie,setMovie]= useState({})

useEffect(()=>{
  const fetchMovie= async()=>{
    try{
      const res = await axios.get(`http://localhost:8800/api/movie/${Id}`)
      setMovie(res.data[0])
     

    }catch(e){
      console.log(e)
    }
  }
  fetchMovie();
},[Id])
console.log(movie,"mooo")

return (
                        
<div>
<NavBar/>

    
<div key={movie.id} className="container2">
      
                      
                        <div className="movie-frame">
                       
                        <iframe width="500px" height="300vh" src={movie?.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="movie-details">
                        <h1>{movie?.name}</h1>
                        <h2>⭐{movie?.rating}/10</h2>
                        <p>{movie?.summary}</p>
                        <Button color="error" size='large' variant="contained" onClick={()=>navigate('../booking/'+ movie.id, { replace: true })}>Book Now</Button>
                        </div>
                       
                      
                      
                       
                      
      </div>



</div>   
)
}
export default ViewMovie