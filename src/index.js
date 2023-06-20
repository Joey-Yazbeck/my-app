import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './css/index.css';
import Login from './Login';
import Target from './testContent/Target';
import reportWebVitals from './builtIn/reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Menu from './testContent/Menu';
import Header from './testContent/Header';
import Search from './testContent/Search';
import App from './Targets';
import DataTable from './testContent/Table2';
import Profiles from './Profiles';
import { BsFillArrowRightCircleFill } from "react-icons/fa";



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Router>
    <Routes>      
      <Route path="/"  element={<Login />}  />
      <Route path="/SignUp"  element={<SignUp />}  />
      <Route path="/Targets"  element={<App />}/>
      <Route path="/Profiles"  element={<Profiles />}/>
      {/* test content */}
      <Route path="/Target"  element={<Target />}/>
      <Route path="/Menu"  element={<Menu />}/>
      <Route path="/Header"  element={<Header />}/>
      <Route path="/Table2"  element={<DataTable />}/>
      <Route path="/Search"  element={<Search />}/>
    </Routes>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
