import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UserRegistration = (props) => {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hashPassword = "";

    fetch("http://localhost:5000/get-hash", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ password: password }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (data.status !== "ok") {
          console.log("error");
          return Promise.reject("no hash received");
        }
        hashPassword = data.msg;
        console.log("hashPassword successful: ", hashPassword);
      })
      // .then(() => {
      //   console.log("firstname: ", firstName);
      //   console.log("lastname: ", lastName);
      //   console.log("email: ", email);
      //   console.log("hashpassword: ", hashPassword);
      // })
      .then(() => {
        fetch("http://localhost:5000/usernew", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            hashPassword: hashPassword,
          }),
        }).then(async (response) => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          props.setIsLoggedIn(true);
          const data = await response.json();
          if (data.status !== "ok") {
            console.log("error");
            return Promise.reject("failed to create new user profile ");
          }
          console.log("successfully created new user profile: ", data.msg);
          props.setUserInfo(data.userInfo);
          alert("Successful user profile creation. You are now logged in.");
          history.push("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="border border-dark" id="registration-box">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <h3>Sign up for a free account</h3>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={firstName}
              name="firstName"
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="col">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={lastName}
              name="lastName"
              onChange={handleLastNameChange}
            />
          </div>
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
  );
};

export default UserRegistration;
