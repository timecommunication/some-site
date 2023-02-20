import {
    Routes,
    Route,
    BrowserRouter,
    Outlet,
    Link,
    Form,
    createBrowserRouter, createRoutesFromElements
} from "react-router-dom";



import Root from "./components/Root";
import Login  from "./components/Login";
import PrivateBoard from "./components/PrivateBoard";
import {useState} from "react";

import {useEffect} from "react";


import {useDispatch, useSelector} from "react-redux";
import {selectIsLogin, setIsLoginTrue} from "./reduxSlices/isLoginSlice";
import request from "superagent";


// async function appLoadFunction() {
//     const isLogin = await request
//         .get('http://192.168.0.117:12345/api/login')
//         .then(
//             (resp) => {
//                 return resp.body.login !== false;
//
//             }
//         )
//     console.log(isLogin)
//     return {isLogin}
// }

//
// login/logout button flash
//
export default function App(){

    // let [isLogin, setIsLogin] = useState();
    // const isLogin = useSelector(selectIsLogin)
    // console.log(isLogin)

    const dispatch = useDispatch()
    const isLogin = useSelector(selectIsLogin)


    function initIsLogin() {

        console.log('now isLogin is', isLogin)

        if(!isLogin) {

            console.log('checking login...')

            request
                .get('http://192.168.0.117:12345/api/login')
                .then(
                    (resp) => {

                        const login = resp.body.login

                        if(login) {
                            dispatch(setIsLoginTrue())
                        }

                    }
                )


        }

    }

    initIsLogin()





    return (

            <BrowserRouter>

                <Routes  >

                    <Route  path='/' element={<Root/>}  >

                        <Route index element={<div>Here is SomeSite</div>} />
                        <Route path='homepage' element={<div>homepage</div>} />
                        <Route path='documents' element={<div>documents</div>}  />
                        <Route path='login' element={<Login/>} />
                        <Route path='*' element={<div>There is nothing here.</div>} />

                    </Route>

                </Routes>

            </BrowserRouter>

    );
}


//
// for use loader function of Route
//
// export function appRouter() {
//     return createRoutesFromElements(
//
//             <Route  path='/' element={<Root/>} loader={appLoadFunction} >
//
//                 <Route index element={<div>Here is SomeSite</div>} />
//                 <Route path='homepage' element={<div>homepage</div>} />
//                 <Route path='documents' element={<div>documents</div>}  />
//                 <Route path='login' element={<Login/>} />
//                 <Route path='*' element={<div>There is nothing here.</div>} />
//
//             </Route>
//
//     )
// }


