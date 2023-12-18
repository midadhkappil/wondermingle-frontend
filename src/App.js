import { useState } from 'react';
import Router from './Router';
import AuthContext from 'context/AuthContext'; 
import { ToastContainer } from 'react-toastify';

function App() {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null,
  });

  console.log({ auth }); 
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <AuthContext.Provider value={{
        auth,
        setAuth 
      }}>
        <Router auth={auth} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
