import React from 'react';
import Signin from '../../Component/Signin/Signin';
import SignUp from '../../Component/SignUp/SignUp';
import { useState} from 'react';
const connect = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [isSignUp, setIsSignUp ]= useState(false)

    const handlecClick = (e) => {
        e.preventDefault();
        console.log((e.target.className == 'connect_signin') )
        if (e.target.className === 'connect_signin') {
            setIsSignIn(true);
            setIsSignUp(false)
            console.log(isSignIn)
        } else if (e.target.className === 'connect_signup') {
            setIsSignIn(false);
            setIsSignUp(true)
            console.log(isSignUp)
        }
    }
    return (
        <div className='connect'>
            <div className='connect_content'>
            {isSignIn ? <Signin /> : <SignUp />}
            <div className="connect_button">
            <button className='connect_signin' onClick={handlecClick}> Sign in</button>
            <button className='connect_signup' onClick={handlecClick}> Sign Up</button>
            </div>
            
            </div>
         
        </div>
        
    );
};

export default connect;