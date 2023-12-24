import { useState, useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { fetchFollowRequests, acceptFollowRequest, rejectFollowRequest } from "Components/Notification/api";

const Notification = () => {
    const [followRequests, setFollowRequests] = useState([]);

    useEffect(() => {
        fetchFollowRequestsData();
    }, []);

    const fetchFollowRequestsData = async () => {
        try {
            const response = await fetchFollowRequests();
            setFollowRequests(response.data);
        } catch (error) {
            // Handle error
        }
    };

    const handleAccept = async (id) => {
        try {
            const response = await acceptFollowRequest(id);
            // Handle success (maybe update UI or fetch new data)
            fetchFollowRequestsData();
        } catch (error) {
            // Handle error
        }
    };

    const handleReject = async (id) => {
        try {
            const response = await rejectFollowRequest(id);
            // Handle success (maybe update UI or fetch new data)
            fetchFollowRequestsData();
        } catch (error) {
            // Handle error
        }
    };

    return ( 
        <div>
            {followRequests.map((request) => (
                <Dropdown.Item key={request.id}>
                  <div className="mb-2">New follow request from {request.requester.username}</div>
                  <div className="dropdown-item-actions">
                    <Button
                      size="sm"
                      variant="success"
                      className="me-2"
                      onClick={() => handleAccept(request._id)}
                    >
                      Accept
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleReject(request._id)}
                    >
                      Reject
                    </Button>
                  </div>
                </Dropdown.Item>
              ))}
        </div>
     );
}
 
export default Notification;
