import axios from 'axios';
import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import {useState, useEffect} from 'react';


function App() {

    useEffect(() => {
        //Code runs on page load 

        FetchShoppingList(); //fetching shopping lists from the server
    }, [])

    //making request to get the shopping list from the db
    const FetchShoppingList = () =>{
        axios.get(('/list').then(response => {
            console.log('Get /list response', response.data)
        })
        .catch(error => {
            console.log('Get /list error', error)
        })
        );
    }
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
