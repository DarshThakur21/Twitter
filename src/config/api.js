import axios from "axios"

export const API_BASE_URL="http://localhost:8080" 


export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("jwt")}`,//try adding space after bearer for correct validating token
        "Content-Type":"application/json",
    }
})