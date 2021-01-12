import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import SignIn from './components/SignIn';
import SignInSide from './components/SignInSide';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignIn/>
        {/* <SignInSide/> */}
        {/* <SignUp/> */}
      </header>
    </div>
  );
}

export default App;
