import logo from "./logo.svg";
import "./App.css";

import { getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import app from "./firebase.init";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const auth = getAuth(app);

function App() {
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    console.log("form submitted");
    event.preventDefault();
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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
