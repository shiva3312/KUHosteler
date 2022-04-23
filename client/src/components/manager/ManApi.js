import { API } from "../../config";


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< GET ROUTERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const read = (userId, token) => {
    return fetch(`${API}/manager/dashboard/${userId}`, {
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


export const gettodaymealList = (userId, token) => {
    return fetch(`${API}/manager/todaymealList/${userId}`, {
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

export const getAllstudents = (userId, token) => {
    return fetch(`${API}/manager/allstudents/${userId}`, {
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

export const getAllemployees = (userId, token) => {
    return fetch(`${API}/manager/allemployee/${userId}`, {
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

export const getAllReqList = (userId, token) => {
    return fetch(`${API}/manager/allReqList/${userId}`, {
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


export const getPaymentRecord = (stuId,userId, token) => {
    return fetch(`${API}/manager/studpayRecord/${stuId}/${userId}`, {
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

export const getHelpsectionData = (userId, token) => {
    return fetch(`${API}/manager/helpSection/${userId}`, {
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

export const getNotice = (userId, token) => {
    return fetch(`${API}/manager/notice/${userId}`, {
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

export const getAboutHostel = (userId, token) => {
    return fetch(`${API}/manager/abouthostel/${userId}`, {
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

export const getCosts = (userId, token) => {
    return fetch(`${API}/manager/cost/${userId}`, {
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


export const getStudentprofile = (stuId,userId, token) => {
    return fetch(`${API}/manager/studentprofile/${stuId}/${userId}`, {
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



//<<<<<<<<<<<<<<<<<<<<<<<<<<<< POST ROUTERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const sethelpSection = (userId, token, records) => {
    return fetch(`${API}/manager/sethelpSection/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: records
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};







//<<<<<<<<<<<<<<<<<<<<<<<<<<<< PUT ROUTERS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const updateMembershipStatus = (manId, token, values) => {
    console.log(values);
    return fetch(`${API}/manager/meal/activateAcoount/${values.memID}/${manId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ values })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const messActivity = (userId, token, status) => {
    return fetch(`${API}/manager/meal/messActivity//${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const fchangeMealStatus = (userId, token,stuId, status) => {
    return fetch(`${API}/manager/fchangeMealStatus/stu/${stuId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const setcost = (userId, token, status) => {
    return fetch(`${API}/manager/setcost/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const setboundtime = (userId, token, status) => {
    return fetch(`${API}/manager/setboundtime/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const setstudetnHostelId = (userId, token,stuId, status) => {
    return fetch(`${API}/manager/setstudetnHostelId/${stuId}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const changeTheme = (userId, token, status) => {
    return fetch(`${API}/manager/setting/theme/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};




