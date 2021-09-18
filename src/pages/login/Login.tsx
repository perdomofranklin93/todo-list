import * as React from "react";
import "./Login.scss";

export default function Login(): React.ReactElement {
  return (
    <div className="login container d-flex justify-content-center align-items-center">
      <div className="card col-12 col-md-8 col-lg-5">
        <div className="card-body">
          <div className="row">
            <h1 className="text-center">Sign in</h1>
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
