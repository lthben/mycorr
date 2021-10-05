import React from "react";
import { Link } from "react-router-dom";

const UserButtons = (props) => {
  const handleSignOut = () => {
    props.setIsLoggedIn(false);
    alert("You are logged out");
  };

  if (!props.isLoggedIn) {
    return (
      <React.Fragment>
        <div className="text-center">
          <Link to="/login">
            <button type="button" className="btn btn-outline-primary">
              Log in
            </button>
          </Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link to="/user-registration">
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Link to="/user-profile">
          <button type="button" className="btn btn-primary">
            My Profile
          </button>
        </Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleSignOut}
          >
            Log out
          </button>
        </Link>
      </React.Fragment>
    );
  }
};

export default UserButtons;
