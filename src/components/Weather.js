import React from 'react'
import {Box, makeStyles} from '@material-ui/core'
import logo from '../assets/weather.jpg'
import Form from './Form';
const usestyles=makeStyles({
    root:
    {
height:'100vh',
display:'flex',
alignItems:'center',
margin:'0 auto',
width:'75%',
    },

leftContainer:
{
backgroundImage:`url(${logo})`,
height:'80%',
backgroundRepeat:'no-repeat',
width:'30%',
backgroundSize:'cover',
borderRadius:'20px 0 0 20px',
},
RightContainer:
{
    backgroundColor:'#686180',
    height:'80%',
    width:'55%',
}
})
const Weather = () => {
    const classes=usestyles();
    return (
        <Box className={classes.root}>
             <Box className={classes.leftContainer}>
             </Box>
             <Box className={classes.RightContainer}>
               <Form/>

             </Box>
        </Box>
    )
}

export default Weather
