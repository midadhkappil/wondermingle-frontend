const { UserContext } = require("context/UserContext")
const { useContext } = require("react")

const useAuth = () => {
    const auth = useContext(UserContext)
    return {
        user: auth.user,
        setUser: auth.setUser
    }
}

export default useAuth