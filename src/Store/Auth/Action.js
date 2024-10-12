import axios from "axios"
import { api, API_BASE_URL } from "../../config/api"
import { FIND_USER_BY_ID_FAILURE, FIND_USER_BY_ID_SUCCESS, FOLLOW_USER_FAILURE, FOLLOW_USER_SUCCESS, GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS } from "./ActionType"

export const loginUser = (loginData) => async (dispatch) => {
    console.log("Login Data:", loginData);
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
        console.log("Logged in user:", data);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
        }
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt });
    } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error.message);
        dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
    }
};



// setting up the registeration api intercom 


export const registerUser=(registerData)=>async(dispatch)=>{
    try {
        console.log("Register Data:", registerData);
        const {data}=await axios.post(`${API_BASE_URL}/auth/signup`,registerData,{
            headers: {
              'Content-Type': 'application/json', // Ensure the correct content type is set
            },
          });
        console.log("singup user",data)

        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
            // dispatch(getUserProfile(data.jwt));
        }
        dispatch({type:REGISTER_USER_SUCCESS,payload:data.jwt})
    } catch (error) {
        console.log("error",error);
        dispatch({type:REGISTER_USER_FAILURE,payload:error.message})

    }

}



export const getUserProfile=(jwt)=>async(dispatch)=>{
    try {
        const {data}=await axios.get(`${API_BASE_URL}/api/users/profile`,{ // user the axios get method to fetch the profile
            headers: {
                "Authorization": `Bearer ${jwt}`
              }

        });

        
        dispatch({type:GET_USER_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        console.log("error",error);
        dispatch({type:GET_USER_PROFILE_FAILURE,payload:error.message})

    }

}


export const findUserById=(userId)=>async(dispatch)=>{
    try {
        const {data}=await  api.get(`/api/users/${userId}`);
            console.log("user",data)
        dispatch({type:FIND_USER_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        console.log("error",error);
        dispatch({type:FIND_USER_BY_ID_FAILURE,payload:error.message})

    }

}



export const updateUserProfile=(reqData)=>async(dispatch)=>{
    try {
        const {data}=await  api.put(`/api/users/update`,reqData);
        console.log("updated user:",data)

        dispatch({type:UPDATE_USER_SUCCESS,payload:data})
    } catch (error) {
        console.log("error",error);
        dispatch({type:UPDATE_USER_FAILURE,payload:error.message})

    }

}


export const followUser=(userId)=>async(dispatch)=>{
    try {
        const {data}=await  api.put(`/api/users/${userId}/follow`);
        console.log("followed user:",data)

        dispatch({type:FOLLOW_USER_SUCCESS,payload:data})
    } catch (error) {
        console.log("error",error);
        dispatch({type:FOLLOW_USER_FAILURE,payload:error.message})

    }

}





export const logout=()=>async(dispatch)=>{
   
       localStorage.removeItem("jwt")

        
        dispatch({type:LOGOUT,payload:null})
      
}