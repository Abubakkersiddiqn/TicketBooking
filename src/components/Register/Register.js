import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Register.scss'
import Typography from '@mui/material/Typography';
import axios from 'axios';
export const Register = () => {
    const navigate = useNavigate()
    const [input,setInput]=useState({
        username:'',
        email:'',
        password:'',
    })
    const [error,setError] = useState(null)
    const handleChange =(e)=>{
       setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    
    const handleClick = async(e)=>{
        e.preventDefault();

        try{
              const res = await axios.post("http://localhost:8800/api/auth/register",input);
              console.log(res.data,"ff");
              navigate('/login')
        }catch(e){
           setError(e.response.data);
        }
    }
  return (
    <div>
    <Card className='cards'>
    <CardContent>
<Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="error" gutterBottom>
    Book Now
</Typography>
    

        <form className='form'>
            <TextField  label="Username"  variant="filled" color='error' name="username" onChange={handleChange} />
            
            <TextField  label="Email"  variant="filled" name='email' color='error' onChange={handleChange}/>
            <TextField  label="Password" variant="filled" name= "password" color='error' onChange={handleChange} />
            
            <Button  type='submit'  color="error" size='small' variant="contained" onClick={handleClick}>Register</Button>

        </form>
        {error && <p style={{color:"red"}}>{error}</p>}
        
        </CardContent>
        <p>Already have account?Please <Link to={'/login'}>login</Link></p>
        </Card>
    </div>
  )
}
export default Register