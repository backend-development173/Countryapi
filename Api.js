const express  = require('express')
const cors  = require("cors")
const  App  = express();
const  pin  = require('pincode')
App.use(cors());
const country  = require("country-state-city").Country;
const state  = require('country-state-city').State;
const city  = require('country-state-city').City;

App.get('/getdetails',(req,res)=>{
return res.status(201).json(country.getAllCountries());
})

App.get('/getstate',(req,res)=>{
    return res.status(201).json(state.getAllStates());
    })
    App.get('/getcities',(req,res)=>{
        console.log("getting cities")

        return res.status(201).json(city.getAllCities());
        })

     

App.listen(4000);