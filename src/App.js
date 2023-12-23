import { useState,useEffect } from 'react';
import Router from './Router';
import AuthContext from 'context/AuthContext'; 
import { ToastContainer,toast } from 'react-toastify';
import { getToken } from 'utils/storage';
import { getCurrentUser, login} from 'Pages/Signup/api'

function App() {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: null,
  });
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  },[])

  useEffect(() => {
    console.log("auth changes", auth)
  },[auth])


  const checkAuth = () => {
    const token = getToken();
    if(!token) return setIsLoading(false)
    fetchCurrenUser()
  }

  const fetchCurrenUser = async() => {
    try {

      const response = await getCurrentUser()
      setAuth({
        isLoggedIn: true,
        user: response.user
      })
      
    } catch (error) {
      console.log({error})
    } finally {
      setIsLoading(false)
    }
  }

  if(isLoading){
    return "Loading"
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{
        auth,
        setAuth 
      }}>
        <Router auth={auth} />
      </AuthContext.Provider>
      <ToastContainer/>
    </div>
  );
}

export default App;
