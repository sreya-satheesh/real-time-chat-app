import React from 'react'
import {useState} from 'react'
import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom'

const RegisterPage = () => {

    const [credentials, setCredentials] = useState({name:'',email:'', password1:'', password2:''})

    const {handleRegister} = useAuth()



    const handleInputChange = (e) => {
        let name = e.target.name
        let value = e.target.value 
    
        setCredentials({...credentials, [name]:value})
        // console.log('CREDS:', credentials)
      }

  return (
    <div className="auth--container">
      <div className="form--wrapper">

        <form onSubmit={(e) => {handleRegister(e, credentials)}}>
          <div className="field--wrapper">
                <input 
                  required
                  type="text" 
                  name="name"
                  value={credentials.name}
                  placeholder="Name"
                  onChange={(e) => {handleInputChange(e)}}
                />
            </div>

            <div className="field--wrapper">

                <input 
                  required
                  type="email" 
                  name="email"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={(e) => {handleInputChange(e)}}
                />
            </div>

            <div className="field--wrapper">
     
                <input 
                  required
                  type="password" 
                  name="password1"
                  placeholder="Password"
                  value={credentials.password1}
                  onChange={(e) => {handleInputChange(e)}}
                />
            </div>

            <div className="field--wrapper">

                <input 
                  required
                  type="password" 
                  name="password2"
                  placeholder="Confirm password"
                  value={credentials.password2}
                  onChange={(e) => {handleInputChange(e)}}
                />
            </div>

            <div className="field--wrapper">
                <input className="btn btn--lg btn--main loginbtn" type="submit" value="Register"/>
            </div>
        </form>

        <p>Ready to dive back in? <Link to="/login">Log in here!</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage
