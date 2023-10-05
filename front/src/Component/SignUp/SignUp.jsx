import React from 'react';
import { useState } from 'react';
import fetchApi from '../../utils/fetch'

const rechercheApi = async (data) => {
    const classApi = new fetchApi()
    const newUser = await classApi.createUser(data)
    return newUser

}
const SignUp = () => {
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("name");
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password'); 

        if (confirmPassword !== password) {
            setIsError(true)
        } else {
            const myData = {name: name, password : password}
            const newUser = await rechercheApi(myData)
           console.log(newUser)
        }
    }
    return (

        <form className="form" onSubmit={handleSubmit}>
                <h2> SignUP</h2>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="password">Enter your password: </label>
                <input type="password" name="password" id="password" required />

                <label htmlFor="confirm-password">confirm-password: </label>
                <input type="password" name="confirm-password" id="confirm-password" required />
                {isError ? <div className='form_error'>mots de passe différents</div>: ''}
            <button type='submit'> S'inscrire</button>
         </form>
   
    );
};

export default SignUp;