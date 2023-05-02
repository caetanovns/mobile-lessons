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