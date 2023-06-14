import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import Login from './Login';
import Target from './Target';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Menu from './Menu';
import Header from './Header';
import Search from './Search';
import App from './Targets';
import DataTable from './Table2';
import Profiles from './Profiles';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Router>
    <Routes>      
      <Route path="/"  element={<Login />}  />
      <Route path="/SignUp"  element={<SignUp />}  />
      <Route path="/Target"  element={<Target />}/>
      <Route path="/Menu"  element={<Menu />}/>
      <Route path="/Header"  element={<Header />}/>
      <Route path="/Search"  element={<Search />}/>
      <Route path="/Targets"  element={<App />}/>
      <Route path="/DataTable"  element={<DataTable />}/>
      <Route path="/Profiles"  element={<Profiles />}/>
      
    </Routes>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
