import { getToken } from "utils/storage";

export const fetchFollowRequests = async () => {

    const response = await fetch("http://localhost:8080/users/follow-requests", {

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    });

    const jsonresponse = await response.json();
    return jsonresponse;

};
export const acceptFollowRequest = async (followRequestId) => {
    const response = await fetch(`http://localhost:8080/follow-requests/${followRequestId}/accepted`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    });

    const jsonresponse = await response.json();
    return jsonresponse;
};

export const rejectFollowRequest = async (followRequestId) => {
    const response = await fetch(`http://localhost:8080/follow-requests/${followRequestId}/rejected`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    });

    const jsonresponse = await response.json();
    return jsonresponse;
};
