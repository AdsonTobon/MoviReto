import React from 'react'
import Login from './Login'
import  {SignUp}  from './SignUp'

export const LoginSignUp = () => {
    return (
      <div style={{display:"flex"}}>
        <Login />
        <SignUp/>
      </div>
    );
}
