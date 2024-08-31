import React from 'react';

// Sample transaction data
const data = [
    { CustomerID: "001", CustomerName: "peter", TransactionDate: "2024-05-10", TransactionAmount: 50.00 },
    { CustomerID: "002", CustomerName: "alex", TransactionDate: "2024-06-10", TransactionAmount: 70.00 },
    { CustomerID: "003", CustomerName: "john", TransactionDate: "2024-06-10", TransactionAmount: 100.00 },
    { CustomerID: "001", CustomerName: "peter", TransactionDate: "2024-07-10", TransactionAmount: 101.00 },
    { CustomerID: "002", CustomerName: "alex", TransactionDate: "2024-05-18", TransactionAmount: 120.00 },
    { CustomerID: "003", CustomerName: "john", TransactionDate: "2024-07-10", TransactionAmount: 120.00 },
];

// Function to calculate points for a single transaction
const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
        points += 2 * (amount - 100);
        amount = 100;
    }
    if (amount > 50) {
        points += 1 * (amount - 50);
    }
    return points;
};

// Process the transaction data
const processTransactions = (data) => {
    const customerPoints = {};

    data.forEach(transaction => {
        const { CustomerID, TransactionDate, TransactionAmount } = transaction;
        const month = new Date(TransactionDate).toLocaleString('default', { month: 'long' });
        const points = calculatePoints(TransactionAmount);

        if (!customerPoints[CustomerID]) {
            customerPoints[CustomerID] = { total: 0 };
        }
        if (!customerPoints[CustomerID][month]) {
            customerPoints[CustomerID][month] = 0;
        }

        customerPoints[CustomerID][month] += points;
        customerPoints[CustomerID].total += points;
    });

    return customerPoints;
};

const Test = () => {
    const customerPoints = processTransactions(data);

    return (
        <div>
            <h1>Reward Points</h1>
            {Object.keys(customerPoints).map(customerID => (
                <div key={customerID}>
                    <h2>Customer {customerID}</h2>
                    {Object.keys(customerPoints[customerID]).map(month => (
                        <p key={month}>{month}: {customerPoints[customerID][month]} points</p>
                    ))}
                    <p><strong>Total: {customerPoints[customerID].total} points</strong></p>
                </div>
            ))}
        </div>
    );
};

export default Test;
