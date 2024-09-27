import React, { useState, useEffect } from 'react';

function Dashboard() {
    // State to store the entrepreneurs' data
    const [entrepreneurs, setEntrepreneurs] = useState([]);

    // Fetch data from the backend when the component is mounted
    useEffect(() => {
        fetch('/api/entrepreneurs')  // Assuming the backend API is already set up to provide this data
            .then(response => response.json())
            .then(data => setEntrepreneurs(data));
    }, []);

    return (
        <div className="dashboard">
            <h2>Entrepreneur Community</h2>

            {/* Display a message if there are no entrepreneurs */}
            {entrepreneurs.length === 0 ? (
                <p>No entrepreneurs found. Please check back later!</p>
            ) : (
                <ul>
                    {/* Iterate over each entrepreneur and display their details */}
                    {entrepreneurs.map(entrepreneur => (
                        <li key={entrepreneur.id} className="entrepreneur-card">
                            {/* Display entrepreneur's name */}
                            <h3>{entrepreneur.name}</h3>
                            
                            {/* Display entrepreneur's bio */}
                            <p><strong>Bio:</strong> {entrepreneur.bio}</p>

                            {/* Display entrepreneur's network information */}
                            <p><strong>Network:</strong></p>
                            <ul>
                                {entrepreneur.network.map((contact, index) => (
                                    <li key={index}>{contact}</li>
                                ))}
                            </ul>

                            {/* Display entrepreneur's saved items */}
                            <p><strong>Saved Items:</strong></p>
                            <ul>
                                {entrepreneur.savedItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            {/* Display entrepreneur's mentors */}
                            <p><strong>Mentors:</strong></p>
                            <ul>
                                {entrepreneur.mentors.map((mentor, index) => (
                                    <li key={index}>{mentor}</li>
                                ))}
                            </ul>

                            {/* Display community information (assuming it's a list of members or groups) */}
                            <p><strong>Entrepreneur Community:</strong></p>
                            <ul>
                                {entrepreneur.community.map((communityMember, index) => (
                                    <li key={index}>{communityMember}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dashboard;
