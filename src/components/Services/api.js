import React from 'react'
import axios from 'axios'
const url="https://api.openweathermap.org/data/2.5/weather";
const api_keys="3433869d7602e63fdb00946449e576f1"
const getData = async(city,country) => {
    return await axios.get(`${url}?q=${city},${country}&appid=${api_keys}&units=metric`)
      
}

export default getData 
