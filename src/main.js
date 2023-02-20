import React from "react";
import ReactDom from "react-dom/client";

import App from "./App.jsx";
import './some-site-style.scss'

import store from './store';
import {Provider} from "react-redux";

import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
} from "react-router-dom";

// import {appRouter} from "./App.jsx";


// a way of fontawesome using
// https://www.pullrequest.com/blog/webpack-fontawesome-guide/
//
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
    faUser,
    faLock,
} from "@fortawesome/free-solid-svg-icons";


library.add([
    faUser,
    faLock,
]);
dom.watch();
//


const root = ReactDom.createRoot(
    document.getElementById('root-container')
)




root.render(
    <React.StrictMode>
        <Provider store={store}>

            <App/>

        </Provider>
    </React.StrictMode>
)

// const router = createBrowserRouter(
//     appRouter()
// );
// root.render(
//     <React.StrictMode>
//         <Provider store={store}>
//
//             <RouterProvider router={router}>
//
//             </RouterProvider>
//
//         </Provider>
//     </React.StrictMode>
// )
