import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Login } from '../components/Login';
// import { useAuth } from './../hooks/use-auth';
const LoginPage = () => {
  // const {isAuth,email,token,id } = useAuth()
  // console.log(isAuth)
  const { email, token, id } = useSelector(state => state.user)
  return (
    <div>
      <h1>LoginPage</h1>
      <p>
        or <Link to='/register'>register</Link>
      </p>
      <Login></Login>
    </div>
  )
}
export default LoginPage