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
        "content-type": "application/json",
    }
});
const jsonresponse = await response.json();
return jsonresponse.data;
 
};