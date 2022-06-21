import {addUserFailure, addUserStart, addUserSuccess, loginFailure, loginStart, loginSucess,} from "./userRedux";
import {publicRequest} from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSucess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

//add Users
export const addUser = async (user, dispatch) => {
    dispatch(addUserStart());
    try {
        const res = await publicRequest.post(`/auth/register`, user);
        dispatch(addUserSuccess(res.data));
    } catch (err) {
        dispatch(addUserFailure());
        console.log(err.response.data)
    }
};
