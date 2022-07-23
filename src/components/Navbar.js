// import React from 'react'
// import PropTypes from 'prop-types'
// // import { makeStyles } from '@mui/styles';
// // import { Toolbar, Typography, createTheme, ThemeProvider, Box } from '@mui/material';

// // const NavigationBar = createTheme();

// export default function Navbar(props) {
//   return (
//     // <ThemeProvider theme={NavigationBar}>
//       <nav className="navbar navbar-expand-lg bg-light">
//             <div className="container-fluid">
//                   <a className="navbar-brand" href="/">{props.title}</a>
//                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                   </button>
//                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                       <li className="nav-item">
//                         <a className="nav-link active" aria-current="page" href="/">Rent</a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="nav-link active" aria-current="page" href="/">Exchange</a>
//                       </li>
//                       <li className="nav-item">
//                         <a className="nav-link active" aria-current="page" href="/">Donate</a>
//                       </li>
//                       <li>
//                       <button type="button" className="btn btn-outline-danger">login</button>
//                       </li>
//                     </ul>
//                   </div>
//                   {/* <form className="d-flex" role="search">
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                   </form> */}
//                   {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//                     <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//                     <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//                   </div> */}
//             </div>
//       </nav>
//     // </ThemeProvider>
//   )
// }

// Navbar.propTypes={
//     title: PropTypes.string.isRequired,
// }
// Navbar.defaultProps={
//     title: 'set title here',
// };

import { Toolbar, Typography, Container, Box, Link} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const menu = createTheme();

const useStyles = makeStyles((theme) => ({
    siteTitle:{
        fontWeight: 'bold',
        letterspacing: 1.5
    },
    toolbar:{
        display: 'flex',
        flexDirection: 'column',
        [menu.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between'
        }
    },
    menuBox: {
        display: 'flex',
        flexDirection: 'column',
        [menu.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    menuOption: {
        padding: menu.spacing(1),
        [menu.breakpoints.up('md')]: {
            paddingleft: menu.spacing(10)
        }
    }
}));

export default function NavigationBar() {
    
    const classes = useStyles();
    
    return (
        <ThemeProvider theme={menu}>
            <Container>
                <Toolbar className={classes.toolbar}>
                    <Typography 
                    component='h1'
                    variant='h4'
                    className={classes.siteTitle}>
                        RED
                    </Typography>
                    <Box className={classes.menuBox}>
                        {['Rent','Exchange','Donate', 'Login'].map((menuOption) => (
                        <Link
                        variant='body1'
                        className={classes.menuOption}
                        >
                            {menuOption.toUpperCase()}
                        </Link>   
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </ThemeProvider>
    );
}