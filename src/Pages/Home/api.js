import { getToken } from "utils/storage";

export const createTwitAPI = async (twit) => {
    const response = await fetch("http://localhost:8080/twit", {
        method: "POST",
        body: JSON.stringify(twit),
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    );
    const jsonresponse = await response.json();
    return jsonresponse;
};


export const fetchFollowRequestsAPI = async () => {
    const response = await fetch("http://localhost:8080/follow-requests", {
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    );
    const jsonresponse = await response.json();
    return jsonresponse;
}

export const cancelFollowRequestsAPI = async (followRequestId) => {
    const response = await fetch(`http://localhost:8080/follow-requests/${followRequestId}/cancel`, {
        method: "PUT",
        headers:
        {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    );
    const jsonresponse = await response.json();
    return jsonresponse;
}