import React, { useState } from "react";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate=useNavigate();
    const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [submitButtonDisabled,setsubmitButtonDisabled]=useState(false);
const handleClick=()=>{
    navigate('/login');
}
  function isValidEmail(Email) {
    return /\S+@\S+\.\S+/.test(Email);
  }
  const [errorMsg,setErrorMsg]=useState("");

  const handleSubmission= event => {
    if (!Name || !Email || !Password) {
        setErrorMsg("Fill all fields");
        alert(errorMsg);
        return;
      }
      setErrorMsg("");

    setsubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth,Email,Password)
    .then(async(res)=>{
        setsubmitButtonDisabled(false);
        const user=res.user;
        await updateProfile(user,{
            displayName:Name,
        })
        navigate("/login");
    })
    .catch((err)=>{
        setsubmitButtonDisabled(false);
        setErrorMsg(err.message);
        alert(errorMsg);
    });
    
  };


  return (
    <section
      className="vh-100"
      //   style={{ "background-color": "hsl(0, 0%, 96%)" }}
      style={{ "background-color": "#508bfc" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ "border-radius": "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign Up</h3>
                <div className="mb-4">
                  <input
                    type="text"
                    id="typeNameX-2"
                    placeholder="Name"
                    className="form-control form-control-lg"
                    style={{ border: "1px solid #bdbdbd" }}
                    value={Name} onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    placeholder="Email Id"
                    className="form-control form-control-lg"
                    style={{ border: "1px solid #bdbdbd" }}
                    value={Email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    id="typePasswordX-2"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    style={{ border: "1px solid #bdbdbd" }}
                    value={Password} onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
        
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                  onClick={handleSubmission}
                  disabled={submitButtonDisabled}
                >
                  Sign Up
                </button>
                <hr class="my-4" />
                <div class="text-center ">
                  <p style={{ margin: "0" }}>
                    Already have an account ? <a href="" onClick={handleClick}>Sign In</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
