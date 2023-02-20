import {Outlet, useLoaderData, useLocation, useNavigate} from "react-router-dom";


import {useSelector, useDispatch} from "react-redux";
import {
    setIsLoginFalse,
    selectIsLogin, setIsLoginTrue,
} from "../reduxSlices/isLoginSlice";

import LogoutButton from "./LogoutButton";
import {useEffect} from "react";
import request from "superagent";

import {Suspense} from "react";

export default function NavBar() {

    const navigate = useNavigate()
    const isLogin = useSelector(selectIsLogin)
    console.log('in navbar isLogin', isLogin)

    // const dispatch = useDispatch()
    // const isLogin = useSelector(selectIsLogin)

    const currentLocation = useLocation()

    let currentPath = currentLocation.pathname
    console.log(currentPath)

    let isLoginPage = currentPath === '/login'

    // useEffect(
    //     () => {
    //
    //         console.log('now isLogin is', isLogin)
    //
    //         if(!isLogin) {
    //
    //             console.log('checking login...')
    //
    //             request
    //                 .get('http://192.168.0.117:12345/api/login')
    //                 .then(
    //                     (resp) => {
    //
    //                         const login = resp.body.login
    //
    //                         if(login) {
    //                             dispatch(setIsLoginTrue())
    //                         }
    //
    //                     }
    //                 )
    //
    //
    //         }
    //
    //
    //
    //     }
    // )



    return (

        <div className="container " >
            <nav className='navbar is-transparent'>
                <div className="navbar-brand navbar-item">
                    <span className="has-text-weight-medium" >SomeSite</span>
                </div>

                <div className="navbar-menu" >
                    <div className="navbar-start">

                        <a  className="navbar-item" onClick={ () => navigate('/homepage') } >主页</a>
                        <a  className="navbar-item" onClick={ () => navigate('/documents') } >文档</a>

                    </div>

                    <div className="navbar-end">

                        {
                            isLoginPage
                                ? null
                                :(<div className="navbar-item ">

                                    {
                                        isLogin
                                            ? <LogoutButton/>
                                            : <a  className="button is-success is-outlined" onClick={ () => navigate('/login') } >登录</a>
                                    }
                                </div>)
                        }

                    </div>

                </div>

            </nav>
        </div>

    );
}