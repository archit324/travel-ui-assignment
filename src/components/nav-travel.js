import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import bell from '../bell.svg'
class Navtravel extends Component{
    render(){
        return (
         <div>
            <Navbar className="justify-content-between nav-bold">
            <Navbar.Brand href="#home">
              <img
              src="https://1000logos.net/wp-content/uploads/2020/04/Wipro-Logo.png"
              width="65"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
               />
              </Navbar.Brand>
              <Nav>
                <Nav.Item>
                  <Nav.Link href="/Travel">Travel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Expense">Expense</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/MyTrips">My Trips</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/Notifications"><img src = {bell} alt = "bell"></img></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/more"><img src = "https://www.svgrepo.com/show/117126/dots-menu.svg" width="20"
              alt="Dots"
              height="20" ></img></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/account">
                    <img src = "https://api-private.atlassian.com/users/5d5b8f605b488e0cfff96434/avatar?initials=public" width="30"
              alt="login"
              height="30" ></img></Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
        </div>
    )
    }
}

export default Navtravel;