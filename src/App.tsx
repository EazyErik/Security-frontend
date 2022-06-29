import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./component/RegistrationPage";
import LoginPage from "./component/LoginPage"
import {UserDetailPage} from "./component/UserDetailPage";


export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<RegistrationPage />} />
            <Route path ="/login" element={<LoginPage />} />
            <Route path ="/userdetails" element={<UserDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
);
}


