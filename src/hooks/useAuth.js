import { useContext } from "react"
import AuthContext from "context/AuthContext"



const useAuth = () => {
    const auth = useContext(AuthContext)
    return {
        isLoggedIn: auth.isLoggedIn,
        user: auth.user,
        setAuth: auth.setAuth
    }
}

export default useAuth