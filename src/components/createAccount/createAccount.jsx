import React from 'react';
import { withRouter } from 'react-router-dom';

import ButtonHover from '../buttonHover/buttonHover';
import './createAccount.scss';


const CreateAccount = ( { history, unShowBtn, signUpBg } ) => {
    return (
        <div className={`create-account ${signUpBg ? 'signUpBg' : ''}`}>
            <h3 className="create-account__heading-3 heading-3">Try It For Free Today!</h3>
            <p className="create-account__paragraph-5 paragraph-5">No Credit Card Required. 30 Day Free Trial.</p>

            <ButtonHover 
                nameClass={`create-account__btn ${unShowBtn ? 'unShowBtn' : ''}`}
                text1={'create account'}
                text2={'and join that'}
                onClick={() => history.push('/signup')}
            />
        </div>
    );
}


export default withRouter(CreateAccount);