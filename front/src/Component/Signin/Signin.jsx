import React from 'react';

const Signin = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("cela fonctionn")
        
    }
    return (
        
        <form className="form" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="password">Enter your password: </label>
                <input type="password" name="password" id="password" required />

            <button type='submit'> S'inscrire</button>
         </form>
   
    );
};

export default Signin;