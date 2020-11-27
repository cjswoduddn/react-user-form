import React, { useState } from 'react';
import './userform.css';
import ValidEmail from './ValidEmail';
import UserService from '../service/UserService';

const Forget = () =>{

  const random = Math.random().toString(33);
  const userService = new UserService();
  // 이 난수를 state로 관리해야 할까? 우선 페이지 리로드 시 난수는 바뀜
  const [email, setEmail] = useState("");



  const changePassword = (e) =>{
    e.preventDefault();
    if(e.target.valid.value !== random){ 
      alert('인증번호가 틀렸습니다')
      return;
    }else if(e.target.password.value !== e.target.repassword.value){
      alert('비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    const userData = {
      password: e.target.password.value
    }
    userService.update(email, userData);
  }

  return(
    <>
      <ValidEmail code={random} setEmail={setEmail}/>
      <br/>
      <form className='account-from' onSubmit={changePassword}>
        <div className='account-form-fields sign-up'>
          <input id='valid' name='valid' type='valid' placeholder='valid code' required/>
          <input id='password' name='password' type='password' placeholder='Password' required/>
          <input id='repassword' name='repassword' type='password' placeholder='Repeat password' required/>
        </div>
        <button className='btn-submit-form' type='submit'>변경하기</button>
      </form>
    </>
  );
}

export default Forget;