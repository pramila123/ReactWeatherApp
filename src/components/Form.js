import React,{useEffect,useState} from 'react'
import {Box,Button,TextField,makeStyles} from '@material-ui/core'
import getData from './Services/api';
import Information from './Information';
const usestyles=makeStyles({
    root:
    {
padding:1,
margin:1,
backgroundColor:'#d97f25',
height:'18vh',
    },
    input:
    {
        color:'white',
        marginRight:'1rem',
    },
    button:
    {
       borderRadius:10,
       height:40,
      marginTop:10,
      marginLeft:5,
      
    }
})


const Form = () => {
    const classes=usestyles();
    const [data, setweatherdata] = useState();
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [click,handleClick]=useState(false);

const handleChange=(val)=>
{
    setCity(val);
}
const handleCountryChange=(val)=>
{
    setCountry(val);
}


    useEffect(() => {
        const getweather=async()=>
        {
        await getData(city,country).then(res=>
            {
                setweatherdata(res.data);
                console.log(res.data)
            })
        }
        getweather();
        handleClick(false);
     },[click] )
    return (
        <>
        <Box className={classes.root}>
          <TextField inputProps={{className:classes.input}}
          className={classes.input}
          onChange={(e)=>handleChange(e.target.value)}
          id="standard-basic" label="Enter City" />
          <TextField id="standard-basic" label="Enter Country" inputProps={{className:classes.input}}
                  
                  onChange={(e)=>handleCountryChange(e.target.value)}
          />
          <Button  className={classes.button} variant="contained" onClick={()=>handleClick(true)}>Get Weather</Button>
        </Box>
        <Information info={data}/>
        </>
    )
}

export default Form
