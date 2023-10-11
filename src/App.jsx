import React, { useState } from "react";
import "./App.css";
import logo from "./assets/pngwing.com.png";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [messages, setMessages] = useState({
    name: "",
    email: "",
    password: "",
  });

  const message = (field, msg) => {
    setMessages((prev) => ({ ...prev, [field]: msg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages({ name: "", email: "", password: "" });

    try {
      if (!name.trim()) {
        message("name","Please enter your name");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) {
        message("email","Please enter a valid email address");
        return;
      }

      if (!password || password.length < 8) {
        message("password","Please enter a password with at least 8 characters");
        return;
      }
      setName("");
    setEmail("");
    setPassword("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
  
    <div className="p-2">
      <div className="  body row vh-100 bg-success ">
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column ">
          <div>
            <div className="d-flex justify-content-center d-md-none">
              <img
                src={logo}
                alt="Logo"
                style={{ height: "25vh" }}
                className="img-fluid"
              />
            </div>
            <h1 className="text-white text-center d-none d-md-block">
              WELCOME
            </h1>
            <p className="d-none d-md-block">
              enter your deatails on sign up page
            </p>
          </div>
          <div>
            <button className="btn btn-outline-light d-none d-md-block">
              Sign Up
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center bg-white">
          <div>
            <h1 className="Signin text-success">Sign In</h1>
            <p>pleace enter your deatails</p>
            <div className="form">
              <form>
                <input
                  className="input-form"
                  type="text"
                  placeholder="User Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {messages.name && (
                  <div className="text-danger">{messages.name}</div>
                )}

                <br />
                <input
                  className="input-form  mt-3"
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {messages.email && (
                  <div className="text-danger">{messages.email}</div>
                )}

                <br />
                <input
                  className="input-form  mt-3"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {messages.password && (
                  <div className="text-danger">{messages.password}</div>
                )}

                <br />
                <input
                  onClick={handleSubmit}
                  className="input-btn btn btn-outline-success mt-3"
                  type="submit"
                  value="Sign In"
                />
                <p>
                  <a href="" className="text-dark">
                    Forgot your Password?
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
