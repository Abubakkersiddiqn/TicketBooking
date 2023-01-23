import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Login.scss'
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../Contex/AuthContex';
export const LogIn = () => {
    const navigate = useNavigate()
    const {login} =useContext(AuthContext)
    const [input,setInput]=useState({
        username:'',
        password:'',
    })
    const [error,setError] = useState(null)
    const handleChange =(e)=>{
       setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    
    const handleClick = async(e)=>{
        e.preventDefault();

        try{
             await login(input)
              
              navigate('/')
        }catch(e){
           setError(e.response.data);
        }
    }
    const google = ()=>{
        window.open("http://localhost:8800/api/auth/google","_self")
    }
  return (
    <div>
    <Card className='cards'>
    <CardContent>
<Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="error" gutterBottom>
    Book Now
</Typography>
    

        <form className='form'>
            
            <TextField  label="Username"  variant="filled" color='error' name="username" onChange={handleChange}/>
            <TextField  label="Password" variant="filled" color='error' name="password" onChange={handleChange}/>
          
            <Button  type='submit'  color="error" size='small' variant="contained" onClick={handleClick} >Login</Button>

        </form>
        {error && <p style={{color:"red"}}>{error}</p>}
        </CardContent>
        
        <button type="button" class="login-with-google-btn" onClick={google} >
  Sign in with Google</button>
  <p>Don't have an account? <Link to ={'/Register'}>sign Up</Link></p>
        </Card>
      
    </div>
  )
}
export default LogIn