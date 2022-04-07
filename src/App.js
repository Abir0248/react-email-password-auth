import logo from "./logo.svg";
import "./App.css";

import { getAuth } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const handleEmailChange = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <h1>Hello i am firebase </h1>

      <form action="">
        <input
          onChange={handleEmailChange}
          type="email"
          name=""
          id=""
          placeholder="email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name=""
          id=""
          placeholder="password"
        />
      </form>
    </div>
  );
}

export default App;
