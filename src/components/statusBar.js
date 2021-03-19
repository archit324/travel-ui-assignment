import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class StatusBar extends Component{
    render(){
        return(<div>
        <Navbar className=" justify-content-between ">
          <div>
           <Nav className="flex-column">
               <Nav.Link className="approval-font" style = {{font: '20px !important'}} disabled>My Approvals</Nav.Link>
           </Nav>
            <Nav defaultActiveKey="/home" as="ul" className="nav-bold">
                <Nav.Item as="li">
                   <Nav.Link href="/PendingApprovals">Pending Approvals</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav-bold">
                   <Nav.Link href="/ApprovedTrips">Approved Trips</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav-bold">
                   <Nav.Link href="/RejectedTrips">Rejected Trips</Nav.Link>
            </Nav.Item>
            </Nav>
            </div>
            <Form inline className="font-buttons">
               <Button type="submit" className = "margin-5 font-buttons">Reject All</Button>
               <Button type="submit" className = "margin-5 font-buttons">Approve All</Button>
  
               <FormControl type="text" placeholder="Search" className=" mr-sm-2 font-buttons" />
               
            </Form>
        </Navbar>
        </div>
        )
    }
}

export default StatusBar;