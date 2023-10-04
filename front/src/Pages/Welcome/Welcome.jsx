import React from 'react';

const welcome = () => {
    const currentUserJson = localStorage.getItem("data")
    const currentUser = JSON.parse(currentUserJson)


    return (
        <div className='utilisateur'>
            <h2 className="utilisateur_name"> 
              Bienvenue {currentUser.name}
            </h2>
        </div>
    );
};

export default welcome;