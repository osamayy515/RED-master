import { Grid, ThemeProvider, Typography, createTheme, Card, CardMedia} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from 'react';

const MainGrid = createTheme();

const useStyles = makeStyles(theme =>({
    mainContainer:{
        height: 400,
        background: "linear-gradient(#AE0A12,#7F070D);",
        color: theme.palette.common.white,
    },
    mainItem:{
        padding: MainGrid.spacing(6),
        paddingTop: MainGrid.spacing(15),
        textAlign: 'left',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
    },
    // cardImage: {
    //     height: 300,
    // }
}));

export default function MainGridItem() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={MainGrid}>
        <Grid container className={classes.mainContainer} xs={12}>
            <Grid item className={classes.mainItem} md={6}>
                <Typography component='h2' variant='h4'>
                    Renting Is More Convenient Than Purchasing
                </Typography>
                <Typography variant='body1' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                </Typography>
                <button type="button" class="btn btn-dark">Upload Item</button>
            </Grid>
            <Grid item className={classes.sidepicture} md={6}>
                <Card>
                    <CardMedia
                        className={classes.cardImage}
                        image=""
                    />
                </Card>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}