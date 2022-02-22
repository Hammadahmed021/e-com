import React from 'react'

 const SignupForm = () => {
  return (
    <div>
         <form>
         <div className="form-group mb-3">
          <label className="mb-2" for="exampleInput">Username</label>
          <input
            type="text"
            className="form-control mb-1"
            id="exampleInput"
           
            placeholder="Enter name"
          />
         
        </div>
        <div className="form-group mb-3">
          <label className="mb-2" for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control mb-1"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted mb-3">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mb-2">
          <label className="mb-2" for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control mb-1"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-outline-primary w-100">
          Register
        </button>
      </form>
    </div>
  )
}
export default SignupForm;
