import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CommonCard = ({ data }) => {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body1">
          Temperature: {data.main.temp} °C
        </Typography>
        <Typography variant="body1">
          Humidity: {data.main.humidity}%
        </Typography>
        <Typography variant="body1">
          Wind Speed: {data.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommonCard;
