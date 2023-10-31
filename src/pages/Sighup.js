import React from 'react'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup.js'

function Sighup() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup,isLoading,error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email,password)
        console.log(email,password)
    }
  return (
    <form className ="signup" onSubmit={handleSubmit}>
        <h1>
          Sign Up  
        </h1>
        <input
        type = "email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        <input
        type = "password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        <button disabled={isLoading}>
            Sign Up
        </button>
        {error && <div className='error'>
          {error}
          </div>}
    </form>
  )
}

export default Sighup
