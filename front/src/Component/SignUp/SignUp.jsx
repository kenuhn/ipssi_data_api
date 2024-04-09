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
    const [Connexion, setConnexion] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("name");
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password'); 
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,8}$/;

        if (confirmPassword !== password ) {
            setIsError(true)
        } 
        else if (name.length < 12 && password.length < 12) {
            setIsError(true)
        }
        else {

            const myData = {name: name, password : password}
            const newUser = await rechercheApi(myData)
            if (newUser.include(newUser.user_id)) {
                setConnexion(true)
            }
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
                {isError ? <div className='form_error'>erreur dans le mot de passe</div>: ''}
                {Connexion ? <div className='form_error'>vous êtes inscris </div>: ''}
            <button type='submit'> S'inscrire</button>
         </form>
   
    );
};

export default SignUp;