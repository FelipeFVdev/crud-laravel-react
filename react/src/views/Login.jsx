// import React from 'react'

import { Link } from "react-router-dom"


export function Login() {

    const onSubmit = (e) => {
        e.preventDefault()
    }
    

  return (
    <div className="login-signup-form animated fadeInDown">
        <div className="form">
            <form action="" onSubmit={onSubmit}>
                <h1 className="title">
                    Login into your Account
                </h1>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="btn btn-block">Login</button>
                <p className="message">
                    Not Registered? <Link to="/signup">Create an Account</Link>
                </p>
            </form>
        </div>
    </div>
  )
}
