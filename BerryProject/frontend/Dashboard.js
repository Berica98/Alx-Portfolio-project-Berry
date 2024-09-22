import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [entrepreneurs, setEntrepreneurs] = useState([]);

    useEffect(() => {
        fetch('/api/entrepreneurs')
            .then(response => response.json())
            .then(data => setEntrepreneurs(data));
    }, []);

    return (
        <div className="dashboard">
            <h2>Entrepreneur Community</h2>
            <ul>
                {entrepreneurs.map(entrepreneur => (
                    <li key={entrepreneur.id}>{entrepreneur.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
