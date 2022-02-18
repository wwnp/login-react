import React from 'react'
import { Link } from 'react-router-dom';
import { Signup } from '../components/Signup';

const RegisterPage = () => {
  return (
    <div>
      <h1>RegisterPage</h1>
      <Signup></Signup>
      <p>
        Already have an account {'=>'}<Link to='/login'>Sign in</Link>
      </p>
    </div>
  )
}

export default RegisterPage