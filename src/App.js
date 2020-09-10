import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function App() {
  const boxes = [
    {"title":"Revenue","subtitle":"RM 3000"},
    {"title":"Users","subtitle":"2000"},
    {"title":"Restaurants","subtitle":"15"},
    {"title":"Riders","subtitle":"120"}
]
const restaurants = [
  {"name":"Uncle Bob Chicken", "orders":15, "revenue":"RM300"},
  {"name":"Mc Donalds", "orders":20, "revenue":"RM1500"},
  {"name":"Pizza Hut", "orders":15, "revenue":"RM200"},
  {"name":"A&W", "orders":15, "revenue":"RM300"},
  {"name":"Nuin Cafe", "orders":15, "revenue":"RM3000"}
]
  return (
    <div className="App">
     <AppBar position="static">
  <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" >
      Dashboard
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
<Grid container spacing={3}>

  {
    boxes.map(val=>{
      return  <Grid item xs={3}><Paper >
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {val.title}
      </Typography>
    <Typography component="p" variant="h4">{val.subtitle}</Typography>
      </Paper>
      </Grid>
    })
  }

  </Grid>
  <Paper>
  <Typography component="h2" variant="h6" color="primary" gutterBottom>
       Orders
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Orders</TableCell>
            <TableCell>Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{
          restaurants.map(val=> 
          { return <TableRow>
        <TableCell>{val.name}</TableCell>
          <TableCell>{val.orders}</TableCell>
          <TableCell>{val.revenue}</TableCell>
          </TableRow>
          })
}
          </TableBody>
          </Table>
  </Paper>
    </div>
  );
}

export default App;
