import logo from "./logo.svg";
import "./App.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import app from "./firebase.init";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      // setValidated(false);
      // return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Password should contain a special character");
      return;
    }
    setValidated(true);
    setError("");
    console.log("form submitted", email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.error(error);
        // ..
      });
  };
  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <input
          onBlur={handleEmailBlur}
          type="email"
          name=""
          id=""
          placeholder="email"
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name=""
          id=""
          placeholder="password"
        />
        <br />
        <input type="submit" value="Log In" />
      </form> */}
      <div className="registration w-50 mx-auto mt-5">
        <h1 className="text-primary">Please Register</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <p className="text-danger">{error} </p>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
