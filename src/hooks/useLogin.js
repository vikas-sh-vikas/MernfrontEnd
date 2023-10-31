import { useState } from "react";
import { useAuthContext} from './useAuthContext'

export const useLogin = () => {
    const [error,setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login =async (email,password) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch('/api/user/login',{
            method:'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })
        console.log(response, "response");
        const json = await response.json()
        //  console.log("json==========>",json);
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
              console.log("json==================>",json);
            dispatch({type:'LOGIN',payload: json})
            setIsLoading(false)
        }

    }
    return {login,isLoading,error}
}