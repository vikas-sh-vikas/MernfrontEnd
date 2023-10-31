import { useState } from "react";
import { useAuthContext} from './useAuthContext'
import {useWorkoutsContext} from './useWorkoutsContext'

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch: workoutContext} = useWorkoutsContext()

    const logout =async () => {
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        workoutContext({type:'SET_WORKOUTS',payload:null})
    }
    return {logout}
}

