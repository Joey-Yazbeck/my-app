import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Header from './Header'
import Profiles from '../Profiles'


export default function Menu() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <header>
      <Header />
      <Profiles/>
      
    </header>
  );
}


