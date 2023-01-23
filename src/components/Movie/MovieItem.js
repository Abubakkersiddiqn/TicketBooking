import "./MovieItem.scss"
import { useState} from "react";


import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




const MovieItem=(props)=>{
const [show,setShow]= useState(false)
                         const toggleHandler=()=>{
                            setShow(!show)
                           
                         }

const styles={color: props.rating>=8.5?"green":"red"}
const summaryStyle ={display: show ?"block":'none'}

return (
<Card className="movie-container">
<CardContent>

<ul>

<li>
<div>
<img src ={props.poster} alt={props.title} className="movie-poster"/>
</div>
<div className="movie-specs">
<h3 className='movie-name'>{props.name} </h3>
<IconButton  onClick={toggleHandler} aria-label="delete">
 {show? <ExpandLessIcon/>: <ExpandMoreIcon/>}
</IconButton>





<p className='movie-rating' style={styles}>⭐ {props.rating}</p>


</div>
<div>



<p className='movie-description' style={summaryStyle}>{props.summary}</p>
</div>

<div className='movie-button'>


 {props.deleteButton} {props.ViewButton}
</div>




</li>

</ul>
</CardContent>
</Card>


)
}
export default MovieItem