import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom'
import { useAuth } from './../hooks/use-auth';
import { removeUser } from '../store/index'
const HomePage = () => {
  const { id, token, email, isAuth } = useAuth()
  const dispatch = useDispatch()

  return isAuth
    ? (
      <div>
        <h1>Welcome</h1>
        <button onClick={() => dispatch(removeUser())}>Log out</button>
      </div>
    )
    : (
      <>
        <Navigate to='login'>Login</Navigate>
      </>
    )
}
export default HomePage