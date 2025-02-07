import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Basic styles for the UI
const styles = {
    container: {
        width: '80%',
        margin: '0 auto',
        paddingTop: '50px',
        textAlign: 'center',
    },
    errorMessage: {
        color: 'red',
        fontSize: '18px',
    },
    successMessage: {
        color: 'green',
        fontSize: '22px',
    },
    button: {
        padding: '10px 20px',
        marginTop: '20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    carCard: {
        margin: '10px 0',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        textAlign: 'left',
    },
    carImage: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        marginRight: '15px',
    },
    carDetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
};

const FetchDataComponent = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // Fetch data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://674dbb7a635bad45618c929e.mockapi.io/carvanax/Cars');
            setData(response.data); // Store the data in the state
            setError(null); // Reset error state if the fetch is successful
        } catch (error) {
            setError('Error fetching data');
            setData(null); // Clear data on error
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data on component mount
    }, []);

    return (
        <div style={styles.container}>
            <h1>API Call Handling Test</h1>
{/* please this code ast typee */}
            {error && <p style={styles.errorMessage}>{error}</p>}
{/* please this code ast typee */}

            {data ? (
                data.map((car) => (
                    <div key={car.id} style={styles.carCard}>
                        <div style={styles.carDetails}>
                            <img src={car.avatar} alt={car.name} style={styles.carImage} />
                            <div>
                                <h3>{car.name}</h3>
                                <p>Fuel: {car.Fuel}</p>
                                <p>Model Year: {car.ModelYear}</p>
                                <p>Price: ${car.Price}</p>
                                <p>Owner: {car.Owner}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                !error && <p>Loading...</p> // Display loading message when data is being fetched
            )}

            {/* Reload data button */}
            <button style={styles.button} onClick={fetchData}>Reload Data</button>
        </div>
    );
};

export default FetchDataComponent;
