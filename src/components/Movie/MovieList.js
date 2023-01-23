import React from 'react'
import "./MovieList.scss"
import { useNavigate } from 'react-router-dom';
//import Counter from './Counter';
import Button from '@mui/material/Button';


import MovieItem from './MovieItem';

const MovieList = ({movie}) => {
   
 const navigate=useNavigate()
        const deleteMovie=(id) =>{
           
  }
      
  return (
    <div>
    <span className='newmovie'>Recommended movie</span>
    <section className="movie-list">

{movie.map((movies,index)=>(
<MovieItem
key={index}
id={movies.id}
name={movies.name}
summary={movies.summary}
poster={movies.poster}
rating={movies.rating}


deleteButton={
                         
                         
                         
<Button onClick={()=>deleteMovie(movies.id)} color="error" size='small' variant="outlined"

>Book ticket</Button>}

ViewButton={
                         
                         
 <Button color="success" variant="outlined" onClick={()=>navigate('/movie/'+ movies.id)}><span>view details</span></Button>}

/>
))}





</section>

    </div>
  )
    
        
}

export default MovieList