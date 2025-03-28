import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentWeatherCard = ({ data }) => {
  return (
    <Card className="card" style={{ marginBottom: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.name} - {data.sys.country}
        </Typography>
        <Typography variant="body1">
          🌡️ Temperature: {data.main.temp} °C
        </Typography>
        <Typography variant="body1">
          🌬️ Wind Speed: {data.wind.speed} m/s
        </Typography>
        <Typography variant="body1">
          💧 Humidity: {data.main.humidity}%
        </Typography>
        <Typography variant="body1">
          🌥️ Description: {data.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeatherCard;
