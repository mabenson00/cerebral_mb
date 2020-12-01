import React from "react";
import logo from "images/logo.svg";
import axios from "axios";

export default function Header(props) {
  function logOut() {
    const token = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;

    axios
      .delete("/users/sign_out", {
        authenticity_token: token,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  return (
    <nav>
      <a href="/">
        <img src={logo}></img>
      </a>
      <div className="log">
        {props.userId && (
          <button onClick={logOut} className="btn btn-small">
            Log Out
          </button>
        )}
        {!props.userId && <button className="btn btn-small">Log In</button>}
      </div>
    </nav>
  );
}
