import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
// import { login } from '../actions/userActions'
import GoogleLogin from 'react-google-login'

import * as userActions from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();
const userLogin = useSelector((state) => state.userLogin);
const { loading, error, userInfo } = userLogin;
const redirect = location.search ? location.search.split('=')[1] : '/';
useEffect(() => {
  if (userInfo) {
    history.push(redirect);
  }
}, [userInfo, history, redirect]);
useEffect(() => {
  if (!userInfo) {
    dispatch(userActions.getGoogleUserInfo());
  }
  // eslint-disable-next-line
}, []);
const submitHandler = (e) => {
  e.preventDefault();
  dispatch(userActions.login(email, password));
};
const signInWithGoogleHandler = (e) => {
  e.preventDefault();
  window.location.href = `/api/auth/google?redirect=${redirect}`;
};
  //

  const responseGoogle = (response) => {
    console.log(response);
    // console.log(response.profileObj.email);
    localStorage.setItem("emailProfile", response.profileObj.email);
    localStorage.setItem("nameProfile", response.profileObj.name);
    localStorage.setItem("imageUrlProfile", response.profileObj.imageUrl);
    localStorage.setItem("googleSessionAccessToken", response.accessToken);
  };
  
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
        
        {/* <Button
        type='button'
        variant='danger'
        onClick={signInWithGoogleHandler}
      >
        <i className='fab fa-google left'> Sign In With Google</i>
</Button> */}
<GoogleLogin
        clientId="281683508823-kpnlbpnusqefec25eqa8m6c52g3n0kse.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
  />

      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
