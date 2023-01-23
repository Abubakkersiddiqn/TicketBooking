import React,{useState} from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import { useParams } from 'react-router-dom';
import './MovieItem.scss'

import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
const MoviePoster = ({movie}) => {
    const{Id}=useParams()
    const [show,setShow]= useState(false)
                         const toggleHandler=()=>{
                            setShow(!show)
                           
                         }


const summaryStyle ={display: show ?"block":'none'}
  return (
    <div>
{movie
  .filter((items) => items.id === Id) // <-- type mismatch comparision
  .map((items, index) => {
    return (
      <div key={items.id} className="container2">
      { <Card className="movie-container">
<CardContent>

 <ul>

 <li>
  <div>
 <img src ={items.poster} alt={items.title} className="movie-poster"/>
 </div>
 <div className="movie-specs">
 <h3 className='movie-name'>{items.name} </h3>
 <IconButton  onClick={toggleHandler} aria-label="delete">
 {show? <ExpandLessIcon/>: <ExpandMoreIcon/>}
</IconButton>





<p className='movie-rating' >⭐</p>


</div>
 <div>



 <p className='movie-description' style={summaryStyle}>{items.summary}</p>
</div>

<div className='movie-button'>


 
</div>




</li>

</ul>
</CardContent>
</Card> }
                      
                       
                      
      </div>
    );
  })}

    </div>
  )
}

export default MoviePoster
