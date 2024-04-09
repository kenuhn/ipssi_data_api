import React from 'react';
import fetchApi from '../../utils/fetch';
import {  useNavigate } from 'react-router-dom';
import {useState } from 'react';
async function rechercheApi (data) {
    const classApi = new fetchApi()
    const myData = await classApi.loginUser(data)
    console.log(myData)
    return myData

}

const Signin = () => {
    const goTo = useNavigate()
    const [isError, setIsError] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("name");
        const password = formData.get("password")
/*         const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,8}$/;
 */        if (name.length < 10 && password.length < 10) {
            console.log("rentrer")
            const myData = {name: name, password : password}
            const dataUser = await rechercheApi(myData)
            if (dataUser.message === "Connexion réussie") {
                localStorage.setItem("data", JSON.stringify(dataUser) )
                goTo(`/welcome/${dataUser.user_id}`)
            }
        } else {
            console.log("entrer")
            setIsError(true)
        }
       
       

      
        

    }
    return (
        
        <form className="form" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="password">Enter your password: </label>
                <input type="password" name="password" id="password" required />
                {isError ? <div className='form_error'>erreur dans le mot de passe</div>: ''}
            <button type='submit'> Se connecter</button>
         </form>
   
    );
};

export default Signin;