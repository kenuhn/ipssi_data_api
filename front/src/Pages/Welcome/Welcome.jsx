import React from 'react';
import fetchApi from "../../utils/fetch"
import { useEffect, useState } from 'react';
import Slider from '../../Component/Analyse/Analyse'
const rechercheApi = async (id) => {
    const classApi = new fetchApi()
    const data = await classApi.readUser(id)

    return data
}
const welcome = () => {
    const [name, setName ] = useState()
    useEffect(() => {
        async function fetchData() {
            const url = window.location.href
            const id = url[url.length - 1]

            if (parseInt(id)) {
                const element = await rechercheApi(parseInt(id))
                setName(element.name)
            }
        }
        fetchData()
    })

    return (
        <div className='utilisateur'>
             <h2 className="utilisateur_name"> 
              Bonjour, {name}
            </h2> 

            <Slider />
        </div>
    );
};

export default welcome;