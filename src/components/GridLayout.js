import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import MainGridItem from './MainGriditem'
import GridItem from "./Griditem";
import Paginations from "./Paginations";
import CustomizedMenus from "./Sidebar";
import "../styles/rent.css";


const GridItems = createTheme();

const useStyles = makeStyles(theme => ({
    mainGridItems: {
        width: 1000
    }
}))

export default function GridLayout() {

    const classes = useStyles();

    return (
        <ThemeProvider theme={GridItems}>
            <Grid container spacing={3}>
                <Grid item lg={12} sm={12} xs={12}>
                    <MainGridItem className={classes.mainGridItem}/>
                </Grid>
                {/* <Container> */}
                {/* <div className="gridmargin" > */}
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <CustomizedMenus/>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem
                        title=""
                        image=""
                        description=""
                    />
                </Grid>

                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <GridItem
                        title=""
                        image=""
                        description=""
                    />
                </Grid>

                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <GridItem
                        title=""
                        image=""
                        description=""
                    />
                </Grid>

                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <GridItem
                        title=""
                        image=""
                        description=""
                    />
                </Grid>

                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <GridItem
                        title=""
                        image=""
                        description=""
                    />
                </Grid>

                <Grid item lg={6} md={12} sm={12} xs={12}>
                    <GridItem
                        title=""
                        image=""
                        description=""
                    />
                </Grid>
                {/* </div> */}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Paginations/>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}