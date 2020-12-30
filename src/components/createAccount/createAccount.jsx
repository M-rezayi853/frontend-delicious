import React from 'react';

import ButtonHover from '../buttonHover/buttonHover';
import './createAccount.scss';


const CreateAccount = () => {
    return (
        <div className="create-account">
            <h3 className="create-account__heading-3 heading-3">Try It For Free Today!</h3>
            <p className="create-account__paragraph-5 paragraph-5">No Credit Card Required. 30 Day Free Trial.</p>

            <ButtonHover 
                nameClass={'create-account__btn'}
                text1={'create account'}
                text2={'and join that'}
            />
        </div>
    );
}


export default CreateAccount;