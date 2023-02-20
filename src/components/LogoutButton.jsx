import {setIsLoginFalse} from "../reduxSlices/isLoginSlice";
import request from "superagent";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


export default function LogoutButton(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleLogoutClick() {
        console.log('logout clicked')

        request
            .post('http://192.168.0.117:12345/api/logout')
            .then(
                (resp) => {
                    console.log('logout clicked')
                    if(resp.body.logout === true) {
                        dispatch(setIsLoginFalse())
                        navigate('/')
                    }


                }
            )

        navigate('/')

    }

    return (
        <a  className="button" onClick={ handleLogoutClick } >登出</a>
    );


}