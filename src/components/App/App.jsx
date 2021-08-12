import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    let [shoppingList, setShoppingList] = useState();

    useEffect(() => {
        fetchShoppingList();
    },[])

    const fetchShoppingList = () => {
        axios.getShoppingList('/list').then(response => {
            console.log('Successful GET.');
            setShoppingList(response.data);
        }).catch(error => {
            console.log('/GET error: ', error);
            alert('Failed to GET. See console for details.');
        })

    };

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
