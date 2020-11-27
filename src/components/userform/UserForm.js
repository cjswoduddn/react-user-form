import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Forget from './Forget';
import './userform.css';

const UserForm = () =>{

  const [mode, setMode] = useState(0);

  return (
    <Grid
      style={{backgroundColor: 'gray', height: '100vh'}}
      container xs={12}
      direction='column'
      alignItems='center'
      justify='center'
      >
      <Grid item xs={6}>
        <div className='container'>
          <header>
          {mode === 0 ? (<span>Sign in to your account</span>) :
           mode === 1 ? (<span>Create an account</span>) :
                        (<span>Reset your password</span>)}
          </header>
          <ul className='options'>
            <li className={mode === 0 ? 'active' : ''} onClick={() => setMode(0)}>로그인</li>
            <li className={mode === 1 ? 'active' : ''} onClick={() => setMode(1)}>회원가입</li>
            <li className={mode === 2 ? 'active' : ''} onClick={() => setMode(2)}>Forgot</li>
          </ul>
          {mode === 0 ? <SignIn/> :
           mode === 1 ? <SignUp/> :
                        <Forget/>}
        </div>
      </Grid>
    </Grid>

  );
}

export default UserForm;