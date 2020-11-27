import React, {useState} from 'react';
import './userform.css';
import ValidEmail from './ValidEmail';
import UserService from '../service/UserService';


const SignUp = () =>{

  const random = Math.random().toString(32);
  const userService = new UserService();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState(random);

  const signUpEvent = (e) =>{
    e.preventDefault();
    console.log(code);
    if(e.target.valid.value !== code){ 
      alert('인증번호가 틀렸습니다')
      return;
    }else if(e.target.password.value !== e.target.repassword.value){
      alert('비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    const userData = {
      email: email,
      password: e.target.password.value,
      name: e.target.name.value
    }

    userService.SignUp(userData);
  }

  return (
    <>
    <ValidEmail code={code} setEmail={setEmail}/>
    <br/>
    <form className='account-from' onSubmit={signUpEvent}>
      <div className='account-form-fields sign-up'>
        <input id='valid' name='valid' type='valid' placeholder='valid code' required/>
        <input id='password' name='password' type='password' placeholder='Password' required/>
        <input id='repassword' name='repassword' type='password' placeholder='Repeat password' required/>
        <input id='name' name='name' type='name' placeholder='Name' required/>
      </div>
      <button className='btn-submit-form' type='submit'>Sign Up</button>
    </form>
    </>
  )
}

export default SignUp;