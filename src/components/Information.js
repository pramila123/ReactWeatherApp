import { Box, Typography } from '@material-ui/core'
import React from 'react'

const Information = ({info}) => {
    return (
        info ?
        <Box style={{textAlign:'center', marginTop:20,color:'#fff'}}>
            <Typography>Location:{info.name},{info.sys.country}</Typography>
            <Typography>Temperature:{info.main.temp}</Typography>
            <Typography>Humidity:{info.main.humidity}</Typography>
            <Typography>Sunrise:{new Date(info.sys.sunrise*1000).toLocaleTimeString()}</Typography>
            <Typography>Sunset:{new Date(info.sys.sunset*1000).toLocaleTimeString()}</Typography>
        </Box> : ''
    )
}

export default Information
