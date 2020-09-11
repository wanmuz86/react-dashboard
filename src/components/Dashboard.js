import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListTable from './ListTable';
import Header from './Header';
import Box from './Box';
import Typography from '@material-ui/core/Typography';

class Dashboard extends React.Component{

   boxes = [
    { "title": "Revenue", "subtitle": "RM 3000" },
    { "title": "Users", "subtitle": "2000" },
    { "title": "Restaurants", "subtitle": "15" },
    { "title": "Riders", "subtitle": "120" }
  ]
   
  constructor(){
  super();
  this.state = {
    restaurants:[]
  }
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://rest-api-places-2020.herokuapp.com/api/restaurants')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState ({
        restaurants:data["data"]
      })
      console.log(this.state.restaurants)
    });
  }
  render(){
    return <div>
    <Header/>
    <Grid container spacing={3}>
    {
      this.boxes.map(val => {
        return <Box val={val}/>
      })
    }
  </Grid>
  <Paper>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Orders
  </Typography>
  <ListTable restaurants={this.state.restaurants}/>
  </Paper>
  </div> 
  }
}
export default Dashboard;
