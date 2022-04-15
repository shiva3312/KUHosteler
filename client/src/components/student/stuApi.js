// All managaer related API will be here 

import { API } from "../../config";

export const read = (userId, token) => {
    return fetch(`${API}/student/home/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const messActivity = (userId, token) => {
console.log("api" , `${API}`);
    return fetch(`${API}/student/meal/messActivity/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const addGuest = (userId, token) => {
    console.log("api" , `${API}`);
        return fetch(`${API}/student/addguest/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };