import AuthContext from "context/AuthContext";
import useAuth from "hooks/useAuth";
import { Button } from "react-bootstrap";

const FollowButton = ({ onClickFollow, userId, followRequests=[], onClickCancelFollowRequest }) => {
    const { isLoggedIn, user} = useAuth()

    if (user._id == userId) {
        return null;
    }

    const followRequest = followRequests.find((request) => request.recipient === userId)

    if(!followRequest){
        return <Button variant="outline-primary" size="sm" onClick={() => onClickFollow(userId)}>Follow</Button>
    }


    return (
        <Button variant="success" size="sm" onClick={() => onClickCancelFollowRequest(followRequest._id)}>Requested</Button>
    );
}

export default FollowButton;