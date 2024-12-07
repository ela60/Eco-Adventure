import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email); // Pre-fill the email field from the login form
    }
  }, [location.state]);

  const handleResetPassword = () => {
    if (!email) {
      setResetError("Please provide a valid email address.");
      return;
    }
    
    // Redirect to Gmail for reset instructions
    const mailToLink = `mailto:${email}?subject=Password%20Reset&body=Please%20click%20the%20link%20to%20reset%20your%20password.`;
    window.location.href = mailToLink;
    
    // Optionally, show a message to the user
    setResetMessage("Redirecting you to Gmail for reset instructions...");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Forgot Password</h1>
          <p className="py-6">Enter your email to reset your password.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button onClick={handleResetPassword} className="btn btn-primary">
                Reset Password
              </button>
            </div>
            {resetError && <p className="text-red-500 text-center mt-2">{resetError}</p>}
            {resetMessage && <p className="text-green-500 text-center mt-2">{resetMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
