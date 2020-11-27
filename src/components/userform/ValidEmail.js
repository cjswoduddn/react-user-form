import React from 'react';
import emailjs from 'emailjs-com';



const ValidEmail = (props) =>{
  const emailjsInfo = {
    SERVICE_ID: 'service_hiozykg',
    TEMPLATE_ID: 'tid',
    USER_ID: 'user_KAd9j7gJZ8Rhtw9DMZQat'
  }

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm(emailjsInfo.SERVICE_ID, emailjsInfo.TEMPLATE_ID, e.target, emailjsInfo.USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    console.log(props.code);
    props.setEmail(e.target.email.value);
  }

  return (
      <form className='account-from' onSubmit={sendEmail}>
        <div className='account-form-fields sign-up'>
          <input id='email' name='email' type='email' placeholder='E-mail' required/>
          <input id='code' name='code' value={props.code} type='hidden'/>
        </div>
        <button className='btn-submit-form' type='submit'>인증번호</button>
      </form>
  )
}

export default ValidEmail;