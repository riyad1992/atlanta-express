import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import './Login.css'

import { useHistory, useLocation } from 'react-router';
import useAute from '../../hooks/useAute';



const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const {SignInWithGoogle, logOut} = useAute()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        SignInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const auth = getAuth();


  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const handleRegistration = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        history.push(redirect_uri);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
        logOut()
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => {})
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {})
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
  }

    return (
        <div className='login'>
          <div className='d-flex justify-content-center py-5'>
            <div className="mx-5 login-form">
              <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                  <label htmlFor="inputName" className="col-3 col-form-label">Name</label>
                  <div className="col-9">
                    <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                  </div>
                </div>}
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-3 col-form-label">Email</label>
                  <div className="col-9">
                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputPassword3" className="col-3 col-form-label">Password</label>
                  <div className="col-9">
                    <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-9 offset-3">
                    <div className="form-check">
                      <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                      <label className="form-check-label" htmlFor="gridCheck1">
                        Already Registered?
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">
                  {isLogin ? 'Login' : 'Register'}
                </button>
                {
                  isLogin && <button type="button" onClick={handleResetPassword} className="btn btn-primary ms-4">Reset Password</button>
                }
              </form>
              <button className="btn btn-primary mt-2" onClick={handleGoogleLogin}><i className="fab fa-google"></i> Google Login</button>
            </div>
          </div>
        </div>
    );
};

export default Login;