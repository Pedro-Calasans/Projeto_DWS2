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
export const addUser = async (user, dispatch, navigate) => {
    dispatch(addUserStart());
    try {
        const res = await publicRequest.post(`/auth/register`, user);
        dispatch(addUserSuccess(res.data));
        alert("Usuário cadastrado com sucesso");
        navigate("/");
    } catch (err) {
        dispatch(addUserFailure());
        if(err.response.data.code === 11000 && err.response.data.keyValue.email === user.email) alert("E-mail já cadastrado");
        else if (err.response.data.code === 11000 && err.response.data.keyValue.username === user.username) alert("Nome de usuário indisponível");
    }

};



