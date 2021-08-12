import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import InputForm from '../input_form/input_form.jsx';
import './App.css';


function App() {


    useEffect(() => {
        //Code runs on page load 

        FetchShoppingList(); //fetching shopping lists from the server
    }, [])

    //making request to get the shopping list from the db
    const FetchShoppingList = () =>{
        axios.get('/list').then(response => {
            console.log('Get /list response', response.data)
        })
        .catch(error => {
            console.log('Get /list error', error)
        })
    }

    const addItem = (newItem) => {
            axios.post('/list', newItem)
                .then(response => {
                    // GET function 
                }).catch(error => {
                    alert('Error Adding Item')
                })
    } // end axios.post

    return (
        <div className="App">
            <Header />
            <InputForm addItem={addItem}/>
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
