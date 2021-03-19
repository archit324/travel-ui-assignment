import React, { Component } from 'react';
import StatusBar from './statusBar';
import StatusTable from './statusTable';
import { Card } from 'react-bootstrap';
import Navtravel from './nav-travel';

class Home extends Component{
    render(){
        return(<div>
           <Card>
            <Card.Header>
               <Navtravel></Navtravel>
             </Card.Header>
    
               <StatusBar></StatusBar>
            
           </Card>     
           <StatusTable></StatusTable>
        </div>
        )
    }
}

export default Home;