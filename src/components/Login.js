import React,{useEffect,useState} from 'react'
import bsnbsd from '../img/loginbg.jpg';

const bg = require('../img/loginbg.jpg');


export const Login = () => {

   return <div className="loginLayout">
  
        <div className="slides">
            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80"/>

            <div className="content">
            <h1>Login</h1>
        <form>
            <input type="email" placeholder="Email Address"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
            <span>Create Account</span>
        </form>
        </div>
        </div>




    </div>
}