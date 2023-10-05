import React from 'react';
import { Link } from 'react-router-dom';
import { contextConnection } from '../../utils/context';
import { useContext } from 'react';
const Header = () => {
    const contextWelcome = useContext(contextConnection)
    
    const id = contextWelcome.user_id
    console.log(id )
    return (
        <header className='header'>
             <Link to={`welcome/${id}`}><h1>SPOTIFY PLAYLIST</h1></Link>
            <div className='header_list'>
                <Link to="/compte">Mon compte</Link>
                <Link to="/analyse">Mes musiques</Link>
        
            </div>
           
        </header>
    );
};

export default Header;