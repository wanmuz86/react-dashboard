import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListTable from './ListTable';
import Header from './Header';
import Box from './Box';
import Typography from '@material-ui/core/Typography';

export default function Dashboard() {
    const boxes = [
        { "title": "Revenue", "subtitle": "RM 3000" },
        { "title": "Users", "subtitle": "2000" },
        { "title": "Restaurants", "subtitle": "15" },
        { "title": "Riders", "subtitle": "120" }
      ]
      const restaurants = [
        { "name": "Uncle Bob Chicken", "orders": 15, "revenue": "RM300" },
        { "name": "Mc Donalds", "orders": 20, "revenue": "RM1500" },
        { "name": "Pizza Hut", "orders": 15, "revenue": "RM200" },
        { "name": "A&W", "orders": 15, "revenue": "RM300" },
        { "name": "Nuin Cafe", "orders": 15, "revenue": "RM3000" }
      ]
    return <div>
    <Header/>
    <Grid container spacing={3}>
    {
      boxes.map(val => {
        return <Box val={val}/>
      })
    }
  </Grid>
  <Paper>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Orders
  </Typography>
  <ListTable restaurants={restaurants}/>
  </Paper>
  </div>  
}