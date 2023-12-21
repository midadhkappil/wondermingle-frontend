import useAuth from "hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const ProtetedRoute = ({element:Element}) => {
        const {isLoggedIn} = useAuth()
    const navigate = useNavigate()
        useEffect(() => {
            checkAuth()
        },[])

        const checkAuth = () => {
            if(!isLoggedIn){
                navigate("/signup")
            }
        }


    return <Element/>;
}
 
export default ProtetedRoute;