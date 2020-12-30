import React from 'react';

import './userChef.scss';


const UserChef = ( { userSrc, userName, numCooks } ) => {
    return (
        <>
            <img className="userChef__img" src={userSrc} alt="chef" />
            <div className="userChef__details">
                <h4 className="heading-4 heading-4-orange">{userName}</h4>
                <p className="paragraph-4">
                    {numCooks} kind of foods cooked
                </p>
            </div>
        </>
    );
}


export default UserChef;