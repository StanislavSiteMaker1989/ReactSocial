import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "2383fc23-7979-4c82-8f1a-470f515f3e51"
    }
})

export  const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true}).then(response =>{return response.data})
},
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/` + userId)

    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

/*export const getUsers = (currentPage = 1, pageSize = 10) => {
   return  instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true}).then(response =>{return response.data})*/

