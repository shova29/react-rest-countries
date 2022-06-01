/* import React,{ useState, useEffect } from 'react';

const Countries = () => {
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data=> console.log(data));
        console.log(data);
    },[])
    
    return (
        <div>
            <h2>Countries in other components files.</h2>
        </div>
    );
};

export default Countries; */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Countries = () => {
    const [countries,setCountries]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data=> console.log(data));
    },[])
    
    return (
        <div>
            <h1>HEllo React Js</h1>
        </div>
    );
};

export default Countries;