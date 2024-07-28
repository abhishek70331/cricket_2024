import React from "react";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

function SideNav() {
    return(
        <>
        
        <Nav className="d-flex justify-content-center align-items-center p-2 navbar-custom">
            <img src="/t20_logo.jpg" alt="logo" className='me2' style={{width:'50px',height:'50px'}}/>
            <Nav.Link href="/"  className="nav-link">Home</Nav.Link>
            <Nav.Link href="/graphs" className="nav-link">About</Nav.Link>
            <Nav.Link href="/cards" className="nav-link" >Service</Nav.Link>
        </Nav>
        
        </>
    )
}

export default SideNav
