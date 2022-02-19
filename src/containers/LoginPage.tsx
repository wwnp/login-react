import React from 'react'
import { Link } from 'react-router-dom';
import { Form } from '../components/Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/index';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const handleLogin= (email:string, password:string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        navigate(`/`);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }
  return (
    <div>
      <h1>LoginPage</h1>
      <p>
        or <Link to='/register'>register</Link>
      </p>
      <Form
        title={'Sign In'}
        handleClick={handleLogin}
      >
      </Form>
    </div>
  )
}
export default LoginPage