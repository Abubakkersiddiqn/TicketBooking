import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './AddMovie.scss'
import {useNavigate} from "react-router-dom";
import axios from 'axios';





const AddMovie=()=>{
const navigate = useNavigate()
const [name,setName]=useState('')
const [rating ,setRating]= useState(0)
const [poster,setPoster]= useState('')
const [summary,setSummary]= useState('')
const [trailer,setTrailer]= useState('')
const[price,setPrice]= useState(0)

const formHandler= async (event)=>{
event.preventDefault();
const onAddMovie ={
                         name:name,
                         rating:rating,
                         poster:poster,
                         summary:summary,
                         trailer:trailer,
                         price:price

}
try{
 await axios.post('http://localhost:8800/api/movie/addmovie',onAddMovie)
 navigate('/')
}catch(e){console.log(e)}
}
return (
<form onSubmit={formHandler} className="form-control">


<TextField type ="text"
 id="outlined-basic" 
 label="Title" 
 variant="outlined" 
 onChange={(event)=>setName(event.target.value)} 
 value={name}
 />

<TextField type="number" 
 id="outlined-basic" 
 label="Rating" 
 variant="outlined" 
 onChange={(event)=>setRating(event.target.value)} 
 value={rating}/>

<TextField  
type="url"
 id="outlined-basic"
label="Image-url" 
variant="outlined" 
onChange={(event)=>setPoster(event.target.value)} 
value={poster}/>

<TextField 
type="text" 
id="outlined-basic"
label="Summary" 
variant="outlined" 
onChange={(event)=>setSummary(event.target.value)}
value={summary}
/>
<TextField 
type="url" 
id="outlined-basic"
label="Trailer" 
variant="outlined" 
onChange={(event)=>setTrailer(event.target.value)}
value={trailer}
/>
<TextField 
type="text" 
id="outlined-basic"
label="Price" 
variant="outlined" 
onChange={(event)=>setPrice(event.target.value)}
value={price}
/>
<Button type="submit" variant="outlined">Add Movie</Button>

</form>)

}
export default AddMovie;