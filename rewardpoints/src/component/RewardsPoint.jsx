import React from "react";
import './style.css'
import RewardsPointEachCustomer from "./RewardsPointEachCustomer";
const data =[
    {
        "CustomerID":"001",
        "CustomerName":"peter",
        "TrasactionDate": "2024-05-10",
        "TransactionAmount":50.00,
    },
    {
        "CustomerID":"002",
        "CustomerName":"alex",
        "TrasactionDate": "2024-06-10",
        "TransactionAmount":70.00,
    },
    {
        "CustomerID":"003",
        "CustomerName":"john",
        "TrasactionDate": "2024-06-10",
        "TransactionAmount":100.00,
    },
    {
        "CustomerID":"001",
        "CustomerName":"peter",
        "TrasactionDate": "2024-07-10",
        "TransactionAmount":101.00,
    },
    ,
    {
        "CustomerID":"002",
        "CustomerName":"alex",
        "TrasactionDate": "2024-05-18",
        "TransactionAmount":120.00,
    },
    {
        "CustomerID":"003",
        "CustomerName":"john",
        "TrasactionDate": "2024-07-10",
        "TransactionAmount":120.00,
    },
]
export   function calculatePoints(amount){
    let points = 0;
    if(amount > 100){
        points +=(amount - 100)*2
        points += 50;
    }
    else if(amount > 50){
        points += (amount - 50);
    }
    return points;
}

class RewardsPoint extends React.Component{
    
    render(){
             
 return(
    <>
    <div className="rewards">   
       
        <div >         
            
                <RewardsPointEachCustomer/>                
            
        </div>
            <div className="customer-details">
                <div className="customer-heading">
                    <h3>Customer Details</h3>
                    <div className="customer-table-data">
                        <table className="customer-table">
                            <thead>
                                <tr>
                                    <td><h4>Customer Name</h4></td>
                                    <td><h4>Transaction Date</h4></td>
                                    <td><h4>Transaction Amount</h4></td>
                                    <td><h4>Rewards Points</h4></td>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item,index)=>{
                                    const points = calculatePoints(item.TransactionAmount)
                                    return(
                                        <tr key={index}>
                                            <td>{item.CustomerName}</td>
                                            <td>{item.TrasactionDate}</td>
                                            <td>{item.TransactionAmount}</td>
                                            <td>{points}</td>
                                            
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
        </div>

    </>
 )
    }
}
export default RewardsPoint