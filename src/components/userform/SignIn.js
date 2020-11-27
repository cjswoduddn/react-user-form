import React from "react";
import './userform.css';
import UserService from '../service/UserService';

const SignIn = () => {

  const userService = new UserService();

  const signInEvent=(e)=>{
    e.preventDefault();

    // 현재 구현으로는 userService에서 null을 반환할수도 있는 코드, 수정필요
    const user = userService.SignIn(e.target.email.value, e.target.password.value);

    /* TODO
    1) 세션 또는 쿠키 관리
    2) 페이지 이동(컴포넌트 unmount인지 ??)
    */
  }

	return (
    <form className='account-from' onSubmit={signInEvent}>
      <div className='account-form-fields sign-in'>
        <input id='email' name='email' type='email' placeholder='E-mail' required/>
        <input id='password' name='password' type='password' placeholder='Password' required/>
      </div>
      <button className='btn-submit-form' type='submit'>Sign in</button>
    </form>
	)
}

export default SignIn;