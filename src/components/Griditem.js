import { Card ,CardActions, CardContent, CardHeader, CardMedia, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowForward } from '@mui/icons-material';
import React from 'react'

const useStyles = makeStyles(()=>({
    cardImage: {
        height: 368,
    }
}));

export default function GridItem(props) {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader
                title={props.title}
                subheader={props.subheader}
            />
            <CardMedia
                className={classes.cardImage} 
                image={props.image}
            />
            <CardContent>
                <Typography>
                        {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="Visit page">
                        <ArrowForward/>
                </IconButton>
            </CardActions>
        </Card>
    );
}