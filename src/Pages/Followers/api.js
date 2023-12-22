import { getToken } from "utils/storage";

export const createFollowRequest = async (body) => {
    const response = await fetch("http://localhost:8080/follow-requests", {
        method: "POST",
        body: JSON.stringify(body),
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