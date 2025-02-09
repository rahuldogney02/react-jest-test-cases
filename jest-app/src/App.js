import logo from "./logo.svg";
import "./App.css";
import MyJestApp from "./jest-app";
import UserClass from './UsersClass';
import UserFunction from './UserFunctional';

function App() {
  return (
    <div className="App">
      <MyJestApp />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Jest Test Cases
        </a>
      </header>
      <UserClass/>
      <UserFunction/>
    </div>
  );
}

export default App;
