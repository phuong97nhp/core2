import logo from '../../../../../public/assets-admin/img/logo-green.svg';
import '../../../../../public/assets-admin/css/all.login.min.css';
import validator from 'validator';
import PropTypes from 'prop-types';
import { useAlert } from 'react-alert';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

function Login ({setAuthToken}) {
    const [email, setEmail] = useState('phuong97nhp@gmail.com');
    const [password, setPassword] = useState('123465');
    const [remember, setRemember] = useState(0);
    const alert = useAlert()
    const  handleClick = (event) =>  {
        if(email == '') {
            return alert.info('Cần nhập vào email');
        }
        if(!validator.isEmail(email)) {
            return alert.info('Địa chỉ Email không chính xác');
        }
        if(password == '') {
            return alert.info('Cần nhập vào mật khẩu');
        }

        if(email || password) {
            axios.post(url_home+'api/auth/login', {email : email, password: password, remember: remember})
            .then(res => {
                setAuthToken(res.data);
                Cookies.set('auth_token_user', res.data.token.access_token, { expires: res.data.token.expires_in })
                localStorage.setItem('auth:token:user', JSON.stringify(res.data.token));
                return alert.success('Đăng nhập thành công');
            })
            .catch(result => {
                return alert.error('Lỗi đăng nhập');
            });
        }
    }
 return (
     <>
        <div className="container-fluid" id="mainLogin">
            <div className="row">
                <div id="mainContainer" className="mx-auto">
                    <div id="Logo" className="pt-3">
                        <img src={logo} alt="Logo"/>
                    </div>
                <div>
                    <form className="was-validated my-3 mx-4" method="POST">
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" defaultValue={email} id="email" placeholder="Nhập tài khoản" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu:</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" defaultValue={password} id="password" placeholder="Nhập mật khẩu" name="password" required/>
                        </div>
                        <div className="form-group form-check d-flex justify-content-center">
                            <div className="form-check-label my-2">
                                <input onChange={(e) => setRemember(e.target.value == 1? 0 : 1)} className="form-check-input" defaultValue={remember} id="remember" type="checkbox" name="remember"/> <label htmlFor="remember">Nhớ mật khẩu này.</label>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <button type="button" onClick={handleClick} className="btn btn-login">Đăng nhập</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
     </>
 );
}

export default Login;

Login.propTypes = {
    setAuthToken: PropTypes.func.isRequired
}