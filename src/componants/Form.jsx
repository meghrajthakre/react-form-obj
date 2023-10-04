import React from 'react'
import forms from './Forms.css'
import img from '../img/photo-1612908486493-011c4e3c238b.avif'
import { useState } from 'react'
const Form = () => {
    const [User, setUser] = useState({
        cname :'',
        fname:'', 
        email:'', 
        number:'', 
        pass:'', 
        cpass:''

    })

    const handleInput = (e)=> {
        setUser(prev => ({...prev , [e.target.name]: e.target.value}))
    }
    const [final, setfinal] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        setfinal(User)
        console.log(final);

    }


  return (
        <>

        <h1>CASUAL SIGN UP FORM</h1>
        <div className="forms">
            <div className="col">
                <h2>Please Register Your Details</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="Cname">Company Name:</label>
                    <input type="text" name='cname' onChange={handleInput} placeholder='Enter Your Company Name ' /> <br/>

                    <label htmlFor="fname">your Name:</label>
                    <input type="text" name='fname' onChange={handleInput} placeholder='Enter Your Name ' /> <br/>

                    <label htmlFor="Cname">Email Adress:</label>
                    <input type="email" name='email' onChange={handleInput} placeholder='mail@example.com ' /> <br/>

                    <label htmlFor="mnumber">Mobile Number :</label>
                    <input type="text" name='number' onChange={handleInput} placeholder='Your Phone Number ' /> <br/>

                    <label htmlFor="password">Password:</label>
                    <input type="text" name='pass' onChange={handleInput} placeholder='Enter Your Password ' /> <br/>

                    <label htmlFor="Cname">Confirm Passowrd:</label>
                    <input type="text" name='cpass' onChange={handleInput} placeholder='Re-Enter Your Password' /> <br/>



                    <button type='submit'>Register</button>

                </form>
                
            </div>
            <div className="col1">
                <img src={img} alt="" width={350}/>
            </div>

        </div>

    </>
  )
}

export default Form