import React, { useContext, useState } from 'react'
import UserContext from '../Context/usercontext';

function Login() {

    const [username,setUsername] =useState('');
    const [password,setPassword]=useState('');

    const {setUser} =useContext(UserContext)
    const handleSubmit =(e)=>
    {
        e.preventDefault();
        setUser({username,password})

    }
  return (
    <>
    <h2>Login form</h2>
     <input type="text" value={username}
     onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username' /> 
     <input type="text" value={password} 
     onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' />
     <button onClick={handleSubmit}>login</button>
    </>
  )
}

export default Login
