import React from "react";

const Login = () => {
  const [user, setUser] = React.useState({
    name: "Usman Akram",
    email: "musmanakram@cuilahore.edu.pk",
    password: "usman",
  });
  const submit = () => {};
  return (
    <div>
      <h4>Login</h4>
      <div className="form-group">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="form-control"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="form-control"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </div>
      <div className="form-group pt-3">
        <button className="btn btn-info" onClick={submit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
