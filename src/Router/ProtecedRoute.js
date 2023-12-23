import useAuth from "hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const ProtetedRoute = ({element:Element}) => {
        const {isLoggedIn} = useAuth()
    const navigate = useNavigate()
        useEffect(() => {
            checkAuth()
        },[isLoggedIn])

        const checkAuth = () => {
            console.log({isLoggedIn})
            if(!isLoggedIn){
                navigate("/signup")
            }
        }


    return <Element/>;
}
 
export default ProtetedRoute;