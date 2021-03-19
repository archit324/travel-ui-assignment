import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import "./Component.css"
import plane from '../20_airtransportation.svg'
class StatusTable extends Component{

    rows = [
        { 
            Requestor: "Michael", 
            TripId: "1889289", 
            RequestDate: "12/08/2019", 
            TravelDate: "03/08/2019",
            servicerequested: plane,
            estimatedcost: "6577",
        },
        { 
            Requestor: "Rajesh", 
            TripId: "19020279382", 
            RequestDate: "16/07/2018", 
            TravelDate: "03/08/2019",
            servicerequested: plane,  
            estimatedcost: "7001",
        },
        { 
            Requestor: "Akash", 
            TripId: "7929892", 
            RequestDate: "20/11/2016", 
            TravelDate: "03/08/2019",
            servicerequested: plane,   
            estimatedcost: "7900",      
        },
        { 
            Requestor: "Umang", 
            TripId: "28817286371", 
            RequestDate: "03/08/2019", 
            TravelDate: "03/08/2019",
            servicerequested: plane,
            estimatedcost: "1600",
        },
        { 
            Requestor: "Iman", 
            TripId: "2889289892", 
            RequestDate: "03/08/2019",
            TravelDate: "03/08/2019",
            servicerequested: plane,
            estimatedcost: "1567",
        }
    ];

     columns = [
   
        {
            id: 1, 
            field: 'Requestor', 
            label: 'Requestor',
        },
        {
            id: 3, 
            field: 'TripId', 
            label: 'Trip Id',
        },
        {
            id: 4, 
            field: 'RequestDate', 
            label: 'Request Date',
        },
        {
            id: 5, 
            field: 'TravelDate',
            label: 'Travel Dat',
       },
        { 
            id : 6,
            field: 'servicerequested', 
            label: 'Service Requested',
        },
        {
            id: 8, 
            field: 'status', 
            label: 'Status',
        }
    ];

    render(){
        return(
            <div className="container paddingtop10">
                <Table 
                borderless
                id="table"
                >                
                <thead>
                    <tr>
                         <th><input type="checkbox"></input></th>
                         <th>Requestor</th>
                         <th>Trip Id</th>
                         <th>Request Date</th>
                         <th>Travel Date</th>
                         <th>Service Requested</th>
                         <th>Estimated Cost</th>
                         <th>Status</th>
                         
                    </tr>
                   </thead>
                   <tbody>
                          {this.rows.map((item,index)=>{
                              return(
                                  <tr id="row">
                                      <th><input type="checkbox"></input></th>

                                {/* <td key={index}>{item.id}</td> */}
                                <td>{item.Requestor}</td>
                                <td>{item.TripId }</td>
                                <td>{item.RequestDate}</td>
                                <td>{item.TravelDate}</td>
                                <td>
                                    <img src = {item.servicerequested} alt = "AirTravel" width="20" height="20"></img>
                                    
                                </td>
                                <td>{item.estimatedcost}</td>
                                <td><button className="button-status">Pending</button></td>
                                <td><img src = "https://cdn4.iconfinder.com/data/icons/text-editor/154/horizontal-additional-menu-dots-512.png" alt="NAN" width="20"
              height="20"></img></td>
                        </tr>
                        )
                              
                })}
                       
                   </tbody>
                </Table>
                <div className="font-pagination">
                <div>Rows per page <select>
                   <option value="1">1</option>
                   <option value="2">2</option>  

                </select> 1-5 of 10 results
                <div className="float-right">
                <button className="button-page button5">1</button>
                <button className="button-page button5">2</button>
                <button className="button-page button5">3</button>
                </div>
                </div>
                </div>
            </div>
        )
    }

}

export default StatusTable;                
