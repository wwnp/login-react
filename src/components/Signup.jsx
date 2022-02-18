import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { setUser } from '../store';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        alert(errorMessage,errorCode)
      });
  }
  return (
    <Form
      title={'register'}
      handleClick={handleSignUp}
    >
    </Form>
  )
}

export { Signup }