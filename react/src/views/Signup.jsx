// import React from 'react'

import {Link} from "react-router-dom";
import {createRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export function Signup() {

  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    axiosClient.post('/signup', payload)
      .then(({data}) =>{
        setUser(data.user)
        setToken(data.token)
      })
      .catch(err => {
        const response = err.response
        if(response && response.status === 422) {
          setErrors(response.data.errors);
        }
      })
  }

  return (
    <div className="login-signup-form animated fadeInDown">
        <div className="form">
            <form action="" onSubmit={onSubmit}>
                <h1 className="title">
                    Singup for Free
                </h1>
                {errors && 
                <div className="alert">
                  {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                  ))}
                </div>

                }
                <input ref={nameRef} type="text" placeholder="Full Name" />
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation" />
                <button className="btn btn-block">Login</button>
                <p className="message">
                    Already Registered? <Link to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    </div>
  )
}