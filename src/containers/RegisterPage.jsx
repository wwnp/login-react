import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Form } from '../components/Form'
import { setUser } from '../store';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
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
        alert(errorMessage, errorCode)
      });
  }
  return (
    <div>
      <h1>RegisterPage</h1>
      <Form
        title={'register'}
        handleClick={handleSignUp}
      >
      </Form>
      <p>
        Already have an account {'=>'}<Link to='/login'>Sign in</Link>
      </p>
    </div>
  )
}

export default RegisterPage