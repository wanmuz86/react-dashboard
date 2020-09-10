import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
export default function Box(props) {
    return <Grid item xs={3}><Paper >
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.val.title}
        </Typography>
        <Typography component="p" variant="h4">{props.val.subtitle}</Typography>
    </Paper>
    </Grid>
}