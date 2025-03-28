import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import moment from 'moment';

const ForecastCard = ({ forecast }) => {
  const dailyForecast = forecast.filter((item, index) => index % 8 === 0);

  return (
    <div>
      <Typography variant="h5" style={{ margin: "20px 0" }}>5-Day Forecast</Typography>
      <Grid container spacing={2}>
        {dailyForecast.map((day, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card className="forecast-card">
              <CardContent>
                <Typography variant="h6">
                  {moment(day.dt_txt).format('dddd')}
                </Typography>
                <Typography variant="body2">
                  📅 {moment(day.dt_txt).format('MMM D')}
                </Typography>
                <Typography variant="body1">
                  🌡️ {day.main.temp} °C
                </Typography>
                <Typography variant="body1">
                  💧 {day.main.humidity}%
                </Typography>
                <Typography variant="body1">
                  🌥️ {day.weather[0].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ForecastCard;
