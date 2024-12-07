import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useRef, useState } from "react";
import { auth } from "../Firebase.init";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation(); 
  const from = location.state?.from?.pathname || "/"; 

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    setLoginError("");
    setSuccessMessage("");

    
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => {
          navigate(from, { replace: true }); 
        }, 2000);
      })
      .catch((error) => {
        setLoginError(error.message || "An error occurred. Please try again.");
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    setLoginError("");
    setSuccessMessage("");

    if (!email) {
      setLoginError("Please provide a valid email address to reset your password.");
    } else {
      navigate("/forgetPassword", { state: { email } }); 
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Access your account to explore more. If you forgot your password, you can easily reset it below.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label onClick={handleForgetPassword} className="label">
                <span className="label-text-alt link link-hover">Forgot password?</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          {loginError && <p className="text-red-500 text-center mt-2">{loginError}</p>}
          {successMessage && <p className="text-green-500 text-center mt-2">{successMessage}</p>}
          <p className="m-2 text-center">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-blue-600 underline">
             SignUp here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
