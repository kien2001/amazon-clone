import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './login.css'
import { auth } from '../../firebase'
import {useStateValue} from '../stateProvider/stateProvider'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [state, dispatch]= useStateValue()
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                dispatch({
                    type: "LOG_IN",
                    user: userCredential.user.email
                })
                navigate('/')
            })
            .catch(err => alert(err))
    }
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                if (userCredential) {
                    console.log(userCredential);
                    navigate('/')
                }
            })
            .catch(err => alert(err))
    }
    return (
        <div className="login">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className='login__logo--image' fontSize='large' />
                    <h2 className='login__logo--title'>eSHOP</h2>
                </div>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <>
                        <button
                            className="login__signInBtn"
                            type="submit"
                            onClick={signIn}
                        >
                            Sign In
                        </button>
                    </>
                </form>
                <p>
                    By continuing, you agree to Amazon's Fake Clone Conditions of Use and
                    Privacy Notice.
                </p>
                <button onClick={register} className="login__registerBtn">
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login