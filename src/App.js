import logo from "./logo.svg";
import "./App.css";

import { getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import app from "./firebase.init";

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
      <h1>Hello i am firebase </h1>

      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default App;
