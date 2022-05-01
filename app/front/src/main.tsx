import React, {SetStateAction, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import Nav from './Components/Navbar'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css'
import App from './App'
import LoginForm from "./Components/LoginForm";
import RouteBlogList from "./Route/RouteBlogList";


ReactDOM.render(
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="blog" element={<RouteBlogList/>}/>
                <Route path="login" element={<RouteLogin/>}/>
                <Route  path="logout" element={<RouteLogout/>}/>
                <Route  path="*" element={<RouteLogout/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
