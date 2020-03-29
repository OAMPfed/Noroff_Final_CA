import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLogin = () => {
    setIsLoggedIn(true);
    console.log('Logged in: ', sessionStorage)
  }
  return (
    <div className="app">
      {(sessionStorage.getItem('token') !== null && isLoggedIn) ?
        <>
          <Navbar />
          {props.children}
        </>
        :
        <Login updateLoginStatus={updateLogin}/>
      }
      
    </div>
  );
}

export default App;
