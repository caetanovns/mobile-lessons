import api from "../api"

export async function finduser() {
    try {
        const result = await api.get("/profile");
        return result.data
    }
    catch (error) {
        console.log(error)
        return {}
    }
}

export async function doLogin(username, password) {
    try {
        const result = await api.get("/users?username=" + username + "&password=" + password);
        return result.data
    }
    catch (error) {
        console.log(error)
        return {}
    }
}

export async function getUser(id) {
    try {
        const result = await api.get("/users/" + id);
        return result.data
    }
    catch (error) {
        console.log(error)
        return {}
    }
}