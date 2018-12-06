import React from 'react';

 const SignUp = ({makeentry,aname,apassword,aemail,aphone}) => {
  return (
    <div>
      <div class='container'>
        <input className='input' type="text" onChange={aname} placeholder='name'/>
        <input className='input' type="text" onChange={aemail} placeholder='email'/>
        <input className='input' type="text" onChange={aphone} placeholder='phone'/>
        <input className='input' type="text" onChange={apassword} placeholder='password'/>
        <button class='signInButton' onClick={makeentry}>Sign Up</button>
      </div>
   </div>
  );
}
  export default SignUp;