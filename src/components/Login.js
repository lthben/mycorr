import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(async (response) => {
        setEmail("");
        setPassword("");
        const data = await response.json();
        if (data.status !== "ok") {
          console.log("failed to login");
          console.log(data.status);
          alert(data.msg);
          return Promise.reject("failed to login ");
        }
        console.log("successfully logged in: ", data.msg);
        props.setIsLoggedIn(true);
        props.setUserInfo(data.userInfo);
        // alert("Successful login");
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="border border-dark" id="registration-box">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <h3>Please sign in</h3>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              name="email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              name="password"
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
