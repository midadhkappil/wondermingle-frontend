import { useState,useEffect } from 'react';
import Router from './Router';
import AuthContext from 'context/AuthContext'; 
import { ToastContainer,toast } from 'react-toastify';
import { getToken } from 'utils/storage';
import { login} from 'Pages/Signup/api'

function App() {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null,
  });
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  },[])


  const checkAuth = () => {
    const token = getToken();
    if(!token) return setIsLoading(false)
    fetchCurrenUser()
  }

  const fetchCurrenUser = async() => {
    try {

      const response = await login()
      setAuth({
        isLoggedIn: true,
        user: response.user
      })
      
    } catch (error) {
      
    } finally {
      setIsLoading(false)
    }
  }

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
