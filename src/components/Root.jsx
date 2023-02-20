import {
    Outlet,
    useLoaderData
} from "react-router-dom";


import NavBar from "./NavBar";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLogin, setIsLoginTrue} from "../reduxSlices/isLoginSlice";
import request from "superagent";


export default function Root() {


    return (
        <>
            <NavBar ></NavBar>
            <Outlet />
        </>
    );

}