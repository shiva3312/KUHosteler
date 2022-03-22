// All managaer related API will be here 

import { API } from "../../config";

export const read = (userId, token) => {
    return fetch(`${API}/home/${userId}`, {
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