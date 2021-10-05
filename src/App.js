import React, { useState } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import UserButtons from "./components/UserButtons";
import UserProfile from "./components/UserProfile";
import UserRegistration from "./components/UserRegistration";
import Workshops from "./components/Workshops";
import logo from "../src/media/images/logo.png";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <div>
      <br></br>
      <nav>
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-4 mb-3">
            <img src={logo} alt="mycorr" width="90px" height="90px" />
          </div>

          <div className="col-md-2 mb-3">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </div>
          <div className="col-md-2 mb-3">
            <Link to="/workshops" className="text-decoration-none">
              Workshops
            </Link>
          </div>

          <div className="col-md-4 mb-3">
            <UserButtons
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        </div>
      </nav>
      <br></br>
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </Route>
        <Route path="/user-profile">
          <UserProfile isLoggedIn={isLoggedIn} userInfo={userInfo} />
        </Route>
        <Route path="/user-registration">
          <UserRegistration
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </Route>
        <Route path="/workshops">
          <Workshops isLoggedIn={isLoggedIn} userInfo={userInfo} />
        </Route>
        <Redirect to="/" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
