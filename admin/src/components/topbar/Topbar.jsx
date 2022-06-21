import React from "react";
import "./topbar.css";
import {ExitToApp} from "@material-ui/icons";
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/userRedux";

export default function Topbar() {

    const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.isAdmin;

    const location = useLocation();

    const loginScreen = location.pathname.split("/")[1];

    const dispatch = useDispatch();

    const handlelogout = () => {
        dispatch(logout())
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Double Biceps</span>
                </div>

                {loginScreen !== "login" ? (

                    <div className="topRight">
                        {admin === true ?
                            <div className="topbarIconContainer">
                                <Link onClick={() => handlelogout()}>
                                    <ExitToApp/>
                                </Link>
                            </div>
                            :
                            <div className="topbarIconContainer">
                                <Link to="/login">
                                    <h2>Login</h2>
                                </Link>
                            </div>}
                    </div>

                ) : (
                    <div></div>
                )}


            </div>
        </div>
    );
}
