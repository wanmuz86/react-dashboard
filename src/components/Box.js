import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EuroIcon from '@material-ui/icons/Euro';
import StoreIcon from '@material-ui/icons/Store';
import PeopleIcon from '@material-ui/icons/People';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
export default function Box(props) {
    return <Grid item xs={3}><Paper >
        {props.val.title == "Revenue" ? <EuroIcon /> : <span />}
        {props.val.title == "Restaurants" ? <StoreIcon /> : <span />}
        {props.val.title == "Users" ? <PeopleIcon /> : <span />}
        {props.val.title == "Riders" ? <MotorcycleIcon /> : <span />}
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.val.title}
        </Typography>
        <Typography component="p" variant="h4">{props.val.subtitle}</Typography>
    </Paper>
    </Grid>
}