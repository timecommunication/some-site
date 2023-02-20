import request  from 'superagent'

import {useSelector, useDispatch} from "react-redux";
import {
    setIsLoginTrue,
    selectIsLogin,
} from "../reduxSlices/isLoginSlice";
import {useNavigate, Form} from "react-router-dom";



export default function Login(props) {

    const dispatch = useDispatch()
    const isLogin = useSelector(selectIsLogin)

    const navigate = useNavigate()

    console.log(isLogin)

    function handleLoginClick(e) {

        e.preventDefault();
        console.log(e)

        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        console.log(username)
        console.log(password)

        request
            .post('http://192.168.0.117:12345/api/login')
            .type('application/json')
            .send(
                {
                    username: username,
                    password: password,
                }
            )
            .then(
                r => {
                    let resp = r.body
                    console.log(resp.login)
                    if (resp.login === true) {

                        console.log('login success')
                        // props.setIsLogin({isLogin: true})

                        dispatch(setIsLoginTrue())

                        navigate('/', {replace: true})

                    } else {
                        console.log('login failed')
                    }
                }
            )

    }



    return (
        <div className="hero is-fullheight-with-navbar">

            <div className="hero-body "
                // style={{border: '1px solid red' }}
            >

                <div className="container   is-fullwidth"
                    // style={{border: '1px solid black'}}
                >
                    <div className="columns is-centered">
                        {/*<div className="column is-one-third" style={{border: '1px solid yellow'}} ></div>*/}

                        <div className="column is-5-widescreen is-5-desktop is-5-tablet"
                             style={{
                                 // border: '1px solid blue',
                                 marginBottom: '20%'
                             }}
                        >

                            <form className="box" >

                                <div className="field ">
                                    <label className="label">用户名</label>
                                    <div className="control has-icons-left">
                                        <input id='username' type="text" className="input"/>
                                        <span className="icon is-left">
                                          <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">密码</label>
                                    <div className="control has-icons-left">
                                        <input id='password' type="password" className="input"/>
                                        <span className="icon is-left">
                                          <i className="fas fa-lock"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="container is-fullwidth mb-3 mt-6"  >
                                    <div className="columns is-centered ">
                                        <div className="column " >
                                            <div className="button is-fullwidth is-success "
                                                 onClick={handleLoginClick}
                                                // onClick={()=>{dispatch(setIsLoginTrue())}}
                                            >登录</div>
                                            {/*<input  value="登录" type="submit" className="button is-fullwidth is-link"/>*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="container is-fullwidth"  >
                                    <div className="columns is-centered ">
                                        <div className="column " >
                                            <div className="button is-fullwidth">注册</div>
                                        </div>
                                    </div>
                                </div>

                            </form>


                        </div>

                        {/*<div className="column is-one-third" style={{border: '1px solid yellow'}} ></div>*/}
                    </div>
                </div>

            </div>

        </div>
    );

}





















