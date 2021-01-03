import React, { useState } from 'react';

import Navigation from '../../components/navigation/navigation';
import CreateAccount from '../../components/createAccount/createAccount';
import InputForm from '../../components/inputForm/inputForm';
import BtnSimple from '../../components/btnSimple/btnSimple';
import './signIn.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


const SignIn = ( { currentUser } ) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setState({...state, [name]: value});
    };

    return (
        <div className="body">
            <div className="signInContainer">
                <CreateAccount />

                <div className="signIn">
                    <Navigation 
                        nameClass={'navigation__sign navigation__sign-In'}
                        currentUser={currentUser}
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
                            <label className="form__label-checkbox">Stay Signed In</label>
                        </div>
                        
                        <div className="form__btns">
                            <BtnSimple 
                                nameClass={'form__btnSimple'} 
                                type='submit'
                            >
                                Sign in
                            </BtnSimple>

                            <BtnSimple 
                                nameClass={'form__btnSimple'} 
                                type='button' 
                                googleColor
                                onClick={signInWithGoogle}
                            >
                                sign in with google
                            </BtnSimple>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default SignIn;