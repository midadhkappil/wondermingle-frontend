import { getToken } from "utils/storage";

export const signup = async (users) => {

    const response =await fetch("http://localhost:8080/users",{
    method: "post",
    body: JSON.stringify(users),
    headers: {
        "content-type": "application/json",
    }
});
const jsonresponse = await response.json();
return jsonresponse.data;
 
};

export const login = async (users) => {
    const response =await fetch("http://localhost:8080/users/login",{
    method: "post",
    body: JSON.stringify(users),
    headers: {
        "Content-Type": "application/json",
    }
});
const jsonresponse = await response.json();
return jsonresponse.data;
 
};


export const getCurrentUser = async (users) => {
    const response =await fetch("http://localhost:8080/user/current-user",{
    headers:
    {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`
    }
    }
);
const jsonresponse = await response.json();
return jsonresponse.data;
 
};
