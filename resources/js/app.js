import React , { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Cookies from 'js-cookie';
// import useAuthToken from './useAuthToken';

import Layout from "./main";
import NotFound from  './components/admin/404/view';

import Dashboard from  './components/admin/dashboard/view';

import UserView from  './components/admin/user/view';
import UserAdd from  './components/admin/user/view';
import Login from  './components/admin/user/login';

// /photo
import MediaView from  './components/admin/media/view';
import MediaUpload from  './components/admin/media/upload';

import RoteView from  './components/admin/role/view';
import RoteSet from  './components/admin/role/set';

// function useAuthToken(){

// }

export default function App() {
    const [authToken, setAuthToken] = useState(); 
    const strAuthToken = useRef(0);

    useEffect(() => {
        var authTokenUser = Cookies.get('auth_token_user');
        if(authTokenUser && authToken == null){
            setAuthToken(authTokenUser);
        }
    });


    const options = {
        // you can also just use 'bottom center'
        position: positions.TOP_RIGHT,
        timeout: 5000,
        offset: '5px',
        // you can also just use 'scale'
        transition: transitions.FADE
    }
    return (
        <AlertProvider template={AlertTemplate} {...options}>
            <BrowserRouter>
                <Routes>
                    {
                        !authToken ? (
                            <Route path="*" element={<Login setAuthToken={setAuthToken} />} />
                        ):(
                            <Route path="/cw-admin" element={<Layout />}>
                                <Route index element={<Dashboard />} />
                                <Route path="dashboard" element={<Dashboard />} />
                                {/* media */}
                                <Route path="media" element={<MediaView />} />
                                <Route path="media/upload" element={<MediaUpload />} />
                                {/* user */}
                                <Route path="/cw-admin/user/view" element={<UserView />} />
                                <Route path="/cw-admin/user/add" element={<UserAdd />} />
                                {/* role */}
                                <Route path="/cw-admin/role/view" element={<RoteView />} />
                                <Route path="/cw-admin/role/set/:id" element={<RoteSet />} />
                                {/* Page not found */}
                                <Route path="/cw-admin/*" element={<NotFound />} />
                            </Route>
                        )
                    }
                </Routes>
            </BrowserRouter>
        </AlertProvider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
// reportWebVitals();


{/* <Route path="/about" element={<About />} />
<Route path="/thong-tin-co-ban" element={<Document />} />
<Route path="/tracking-don-van" element={<Tracking />} />
<Route path="/tao-don-hang" element={<CreateOrder />} />
<Route path="/chinh-don-van" element={<EditOrder />} />
<Route path="/xoa-don-van" element={<DeleteOrder />} />
<Route path="/support" element={<Support />} />
<Route path="/tinh-thanh-pho" element={<City />} />
<Route path="/quan-huyen" element={<District />} />
<Route path="/xa-phuong" element={<Ward />} /> */}