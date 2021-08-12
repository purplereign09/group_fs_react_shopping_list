import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';

function App() {

    let [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        //Code runs on page load 

        FetchShoppingList(); //fetching shopping lists from the server
    }, [])

    //making request to get the shopping list from the db
    const FetchShoppingList = () =>{
        axios.get('/list').then(response => {
            console.log('is our data an array?: ', Array.isArray(response.data));
            console.log('Get /list response', response.data)
            setShoppingList(response.data);

        })
        .catch(error => {
            console.log('Get /list error', error)
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ShoppingList shoppingList={shoppingList}/>
            </main>
        </div>
    );
}

export default App;
