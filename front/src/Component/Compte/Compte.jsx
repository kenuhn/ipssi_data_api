import React from 'react';
import fetchApi from '../../utils/fetch'
import { useContext } from 'react';
import { contextConnection } from '../../utils/context';
import { useNavigate } from 'react-router-dom';
const rechercheApi = async (data, id) => {

    const classApi = new fetchApi()
    const myData = await classApi.updateUser(data, id)
    return myData
}
const Compte = () => {
    const dataJson = useContext(contextConnection)
    const id = dataJson.user_id
    console.log(id)
    const navigation = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("name");
        const password = formData.get("password");
        const obj = {name: name, password: password}
        
        const newName = await rechercheApi(obj, id);
        console.log(newName)
        navigation(`/welcome/${id}`)  
    }

    const handleClick = () => {
       
        localStorage.clear()
        navigation('/') 
    }
    return (
        <div className='compte'>
            <form className="form compte_form" onSubmit={handleSubmit}>
            <h2> Modifier mon compte</h2>

            <label htmlFor="name">Enter your name: </label>
            <input type="text" name="name" id="name" required />

            <label htmlFor="password">Enter your password: </label>
            <input type="password" name="password" id="password" required />

            <button type='submit'> Modifier</button>
        </form>

        <button className="disconnect_button" onClick={handleClick}>Me déconnecter</button>
        </div>
        
    )

};

export default Compte;