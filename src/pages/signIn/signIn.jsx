import React, { useState } from 'react';

import Sidebar from '../../components/sidebar/sidebar';
import Navigation from '../../components/navigation/navigation';
import ButtonHover from '../../components/buttonHover/buttonHover';
import CreateAccount from '../../components/createAccount/createAccount';
import InputForm from '../../components/inputForm/inputForm';
import './signIn.scss';


const SignIn = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = event => {
        event.preventDefault();

        setState({
            email: '',
            password: ''
        });
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setState({...state, [name]: value});
    };

    return (
        <div className="body">
            <Sidebar />

            <div className="signInContainer">
                <CreateAccount />

                <div className="signIn">
                    <Navigation 
                        nameClass={'navigation__signIn'}
                    />
                    <h3 className="signIn__heading-3 heading-3-light">Welcome Back!</h3>

                    <form className="form" onSubmit={handleSubmit}>
                        <InputForm 
                            name='email'
                            type='email'
                            label='Email'
                            required
                            value={state.email}
                            handleChange={handleChange}
                        />
                        <InputForm 
                            name='password'
                            type='password'
                            label='Password'
                            required
                            value={state.password}
                            handleChange={handleChange}
                        />

                        <div className="form__list-checkbox">
                            <input className="form__checkbox" type="checkbox" id="checkbox" />
                            <label className="form__label-checkbox" for="checkbox">Stay Signed In</label>
                        </div>
                        
                        <ButtonHover 
                            nameClass={'form__btn'}
                            text1={'sign in'}
                            text2={'log in'}
                            type='submit'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}


export default SignIn;