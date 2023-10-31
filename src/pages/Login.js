import React from 'react'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

function LogIn() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login,isLoading,error} = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email,password)
    }
  return (
    <form className ="login" onSubmit={handleSubmit}>
        <h1>
          Log In  
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
        <button>
            Log In
        </button>
        {error && <div className='error'>
          {error}
          </div>}
    </form>
  )
}

export default LogIn
