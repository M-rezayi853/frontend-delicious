import React, { useState } from 'react';
import { connect } from 'react-redux';

import Navigation from '../../components/navigation/navigation';
import CreateAccount from '../../components/createAccount/createAccount';
import InputForm from '../../components/inputForm/inputForm';
import BtnSimple from '../../components/btnSimple/btnSimple';
import './signIn.scss';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInGoogleStart, signInEmailStart } from '../../redux/user/user.actions';


const SignIn = ( { signInGoogleStart, signInEmailStart } ) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = state;

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     setState({
        //         email: '',
        //         password: ''
        //     });
        // } catch (error) {
        //     console.log(error);
        //     alert(error);
        // }

        signInEmailStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setState({...state, [name]: value});
    };

    return (
        <div className="bodySignIn">
            <div className="signInContainer">
                <CreateAccount />

                <div className="signIn">
                    <Navigation 
                        nameClass={'navigation__sign'}
                    />
                    <h3 className="signIn__heading-3 heading-3-light">Welcome Back!</h3>

                    <form className="formSignIn" onSubmit={handleSubmit}>
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

                        <div className="formSignIn__list-checkbox">
                            <input className="formSignIn__checkbox" type="checkbox" id="checkbox" />
                            <label className="formSignIn__label-checkbox">Stay Signed In</label>
                        </div>
                        
                        <div className="formSignIn__btns">
                            <BtnSimple 
                                nameClass={'formSignIn__btnSimple'} 
                                type='submit'
                            >
                                Sign in
                            </BtnSimple>

                            <BtnSimple 
                                nameClass={'formSignIn__btnSimple'} 
                                type='button' 
                                googleColor
                                // onClick={signInWithGoogle}
                                onClick={signInGoogleStart}
                            >
                                sign in with google
                            </BtnSimple>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signInGoogleStart: () => dispatch(signInGoogleStart()),
    signInEmailStart: (email, password) => dispatch(signInEmailStart( { email, password } ))
});


export default connect(null, mapDispatchToProps)(SignIn);