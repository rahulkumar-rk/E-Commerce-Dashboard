import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth)
    {
      navigate('/');
    }
  })
  const collectData=async()=>{
   console.log(name,email,password);
   let result=await fetch('http://localhost:8080/register',{
    method:'POST',
    body:JSON.stringify({name,email,password}),
    headers:{
      'Content-Type':'application/json'
    },
   });
   result=await result.json();
   console.log(result);
   localStorage.setItem('user',JSON.stringify(result.result));
   localStorage.setItem('token',JSON.stringify(result.auth));
  navigate('/');

  }
  return (
    <div className='register'>
    <h1>Register</h1>
    <input 
    id='name'
    name='name'
    className='inputBox' type="text"
    value={name} 
    onChange={(e)=>setName(e.target.value)}
    placeholder='Enter Name'/>

    <input 
    id='email'
    name='email'
    className='inputBox' type="email" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    placeholder='Enter Email'/>

    <input 
    id='password'
    name='password'
    className='inputBox' type="password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder='Enter Password'/>
    <button onClick={collectData}
    className='btn'> Sign Up</button>
    </div>
  )
}

export default SignUp