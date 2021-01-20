import React, { useState } from 'react';
import { connect } from 'react-redux';

import Navigation from '../../components/navigation/navigation';
import CreateAccount from '../../components/createAccount/createAccount';
import InputForm from '../../components/inputForm/inputForm';
import BtnSimple from '../../components/btnSimple/btnSimple';
import './signUp.scss';

// import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';

import { signUpStart } from '../../redux/user/user.actions';


const SignUp = ( { signUpStart } ) => {
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = state;

        if (password !== confirmPassword) {
            alert('password don\'t match!');
            return;
        };

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //     await createUserProfileDoc(user, { displayName });

        //     setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     });
        // } catch (error) {
        //     console.error(error);
        //     alert(error);
        // }

        signUpStart(email, password, displayName);
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setState({...state, [name]: value});
    };

    return (
        <div className="bodySignUp">
            <div className="signUpContainer">
                <CreateAccount unShowBtn signUpBg />

                <div className="signUp">
                    <Navigation 
                        nameClass={'navigation__sign'}
                    />
                    <h3 className="signIn__heading-3 heading-3-light">Create a Free Account!</h3>

                    <form className="formSignUp" onSubmit={handleSubmit}>
                        <InputForm 
                            name='displayName'
                            type='text'
                            label='Display Name'
                            required
                            value={state.displayName}
                            handleChange={handleChange}
                        />
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
                        <InputForm 
                            name='confirmPassword'
                            type='password'
                            label='Confirm Password'
                            value={state.confirmPassword}
                            handleChange={handleChange}
                        />

                        <BtnSimple
                            nameClass={'formSignUp__btnSimple'}
                            type='submit'
                        >
                            Sign up
                        </BtnSimple>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart( { email, password, displayName } ))
});


export default connect(null, mapDispatchToProps)(SignUp);