import React from 'react'
import { signInWithEmailAndPassword ,signInWithPopup,signInWithRedirect} from "firebase/auth";
import { GoogleAuthProvider,signOut,getAuth } from 'firebase/auth';
import {provider} from "../firebase";
import { getRedirectResult } from 'firebase/auth';
import {auth} from "../firebase";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Login(){
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [submitButtonDisabled,setsubmitButtonDisabled]=useState(false);
const [value,setValue]=useState('');

  const handleGoogleSignIn=async()=>{
    await signInWithPopup(auth,provider);
    // await signInWithRedirect(auth,provider);
    navigate("/");
    }

  

  const handleClick=()=>{
    navigate('/signup');
}

  function isValidEmail(Email) {
    return /\S+@\S+\.\S+/.test(Email);
  }
  const [errorMsg,setErrorMsg]=useState("");

  const handleSubmission1=()=>{
  if (!Email || !Password) {
    setErrorMsg("Fill all fields");
    alert(errorMsg);
    return;
  }
  setErrorMsg("");

  setsubmitButtonDisabled(true);
  signInWithEmailAndPassword(auth,Email,Password)
  .then(async(res)=>{
      setsubmitButtonDisabled(false);
      navigate("/");
  })
  .catch((err)=>{
      setsubmitButtonDisabled(false);
      setErrorMsg(err.message);
      alert(errorMsg);
  });
  }

  return (
    <section className="vh-100" style={{"background-color": "#508bfc"}} >
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{"border-radius":"1rem"}}>
            <div className="card-body p-5 text-center">
              <h3 className="mb-5">Sign in</h3>
              <div className="mb-4" >
                <input type="email" placeholder='Email Id' id="typeEmailX-2" className="form-control form-control-lg" style={{border:"1px solid #bdbdbd"}} value={Email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="mb-4">
                <input type="text" placeholder='Password' id="typePasswordX-2" className="form-control form-control-lg" style={{border:"1px solid #bdbdbd"}} value={Password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              {/* Checkbox */}
              <div className="form-check d-flex justify-content-start mb-4">
                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
              </div>
              <button className="btn btn-primary btn-lg btn-block" type="submit"  disabled={submitButtonDisabled} onClick={handleSubmission1}>Login</button>
              <hr className="my-4" />
              <button className="btn btn-lg btn-block btn-primary" style={{"background-color":"#dd4b39"}} type="submit" onClick={handleGoogleSignIn}
                  disabled={submitButtonDisabled} ><i className="fab fa-google me-2" /> Sign in with google</button>
              
              {/* <button className="btn btn-lg btn-block btn-primary mb-2" style={{"background-color":"#3b5998"}} type="submit"><i className="fab fa-facebook-f me-2" />Sign in with facebook</button> */}
            
              <div class="text-center mt-4">
                  <p style={{margin:"0"}}>
                    Don't have an account ? <a href="" onClick={handleClick}> Register</a>
                  </p>
                </div>
                </div>
          
           
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}







