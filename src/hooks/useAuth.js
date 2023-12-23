import { useContext } from "react"
import AuthContext from "context/AuthContext"

const useAuth = () => {
    const {auth, setAuth} = useContext(AuthContext)
    const {isLoggedIn, user} = auth
    return {
        isLoggedIn,
        user,
        setAuth
    }
}

export default useAuth