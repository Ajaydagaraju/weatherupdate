import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import '../style.scss'
import CommonCard from './CommonCard';

const API_KEY = 'd72ebfa683127f59dcd97ff7b78de6a3';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const fetchWeatherData = async () => {
        if(city === ""){
            setError("Please enter a city name.")
            return
        }
        setLoading(true)
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(response.data);
            setError(null);
            setCity('');
            setLoading(false)
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('City not found. Please try another City.');
            setWeatherData(null);
            setLoading(false)
        }
    };

    return (
        <Container className="container">
            <Typography variant="h4" gutterBottom>
                Weather Dashboard
            </Typography>
            <div className="search">
                <TextField
                    label="Enter city name"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="input-field"
                />
                <Button
                    variant="contained"
                    className={`btn ${loading ? 'loading' : ''}`}
                    onClick={fetchWeatherData}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : 'Search'}
                </Button>
            </div>
            {error && <Typography variant="body1" color="error">{error}</Typography>}
            {weatherData && !error && <CommonCard data={weatherData} />}
        </Container>
    );
};

export default Weather;
