import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const AuthContext =createContext()

export const AuthContextProvider=({children})=>{
const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem('user'))||null)

useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8800/api/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
            setCurrentUser(resObject.user);
            console.log(currentUser.username)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
const header={
    'Access-Control-Allow-Credentials': 'true'
}
const login = async (input)=>{
    const res=  await axios.post("http://localhost:8800/api/auth/login",input,{
        headers: header
    });
    setCurrentUser(res.data);
}
const logOut = async (input)=>{
    await axios.post("http://localhost:8800/api/auth/logout");

    window.open("http://localhost:8800/api/auth/logout", "_self");
      
    setCurrentUser(null);
}
 useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(currentUser))
 },[currentUser])
 return (
 <AuthContext.Provider value={{currentUser,login,logOut}}>
{children}
 </AuthContext.Provider>
 )
}