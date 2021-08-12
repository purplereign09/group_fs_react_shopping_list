import axios from 'axios';
import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import {useState, useEffect} from 'react';
import ShoppingList from '../ShoppingList/ShoppingList'


function App() {
 let [shoppingList, setShoppingList]  =  useState([]);
    useEffect(() => {
        //Code runs on page load 

        FetchShoppingList(); //fetching shopping lists from the server
    }, [])

    //making request to get the shopping list from the db
    const FetchShoppingList = () => {

        axios.get('/list').then(response => {
            console.log('Get /list response', response.data)
            setShoppingList(response.data)
        }).catch(error => {
            console.log('Get /list error', error)
        });
    }
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ShoppingList
                //passing a variable called a shoppingList and giving it a value 
                shoppingList ={shoppingList}
                />
            </main>
        </div>
    );
}

export default App;
