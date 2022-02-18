import React from 'react'
import { Form } from './Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../store';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        const user = userCredential.user;
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        navigate(`/`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  return (
    <Form
      title={'Sign In'}
      handleClick={handleLogin}
    >
    </Form>
  )
}

export { Login }