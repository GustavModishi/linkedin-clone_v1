import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/userSlice';


function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
           .then((userAuth)=> {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
            }))
        })

    };  

    const register = () => {
    
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth)=> {
                userAuth.user
                .updateProfile({
                    displayName: name,

                }).then(()=> {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                    }))
                })
            }
        ).catch(error => alert(error))
    };

  return (
    <div className='login'>
        
        <FaLinkedin className='login_icon'/>

        <form >
            <input  
            value={name}
            onChange={(e) => setName(e.target.value)} 
            placeholder='full name(required to register)' 
            type="text"/>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email' 
            type='email'/>
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
            placeholder='password' 
            type='password'/>
            <button onClick={loginToApp}>Sign In</button>
        </form>

        <p>
            Not a member?  {' '}
            <span 
            className='login_register' 
            onClick={register}> Register</span>
        </p>
    </div>
  )
}

export default Login