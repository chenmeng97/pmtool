import axios from "axios";
import { setJWTToken } from "../securityUtils/setJWTToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => {
    return async dispatch => {
        try{
            await axios.post("/api/users/register", newUser);
            history.push("/login");
            dispatch({
                type: GET_ERRORS,
                payload: {}
            });
        }catch(err){
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        }
    }
};

export const login = (loginRequest) => {
    return async dispatch => {
        try{
            const res = await axios.post("/api/users/login", loginRequest);
            const {token} = res.data;
            localStorage.setItem("jwtToken", token);
            setJWTToken(token);
            const decoded = jwt_decode(token);

            dispatch({
                type: SET_CURRENT_USER,
                payload: decoded
            });
        }catch(err){
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    }
}

export const logout = () => {
    return async dispatch => {
        localStorage.removeItem("jwtToken");
        setJWTToken(false);
        dispatch({
            type: SET_CURRENT_USER,
            payload: {}
        });
    }
}