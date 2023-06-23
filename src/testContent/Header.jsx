import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBadge,
} from 'mdb-react-ui-kit';
import { useEffect } from 'react';


export default function Header() {
  const [showBasic, setShowBasic] = useState(true);

  useEffect(() => {
    console.log(showBasic);
    setShowBasic(true);
    console.log(showBasic);
    },[]);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Home
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='http://localhost:3000/signup'>Add User</MDBDropdownItem>
                  <MDBDropdownItem link>View Users</MDBDropdownItem>
                  <MDBDropdownItem link href='http://localhost:3000/'>SignOut</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='http://localhost:3000/menu'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='http://localhost:3000/targets'>Targets</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='http://localhost:3000/suspects'>Suspects</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink href='http://localhost:3000/keyword'>Keywords</MDBNavbarLink>
            
             
            </MDBNavbarItem>
            

           
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            
          <MDBBtn style={{ backgroundColor: 'black' }} href='#'>
          <MDBIcon far icon="bell" /> 
          
          </MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}