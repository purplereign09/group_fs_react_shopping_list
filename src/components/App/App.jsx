import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import InputForm from '../input_form/input_form.jsx';
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
    };

    const addItem = (newItem) => {
            axios.post('/list', newItem)
                .then(response => {
                    // GET function 
                    FetchShoppingList();
                }).catch(error => {
                    alert('Error Adding Item')
                })
    } // end axios.post

    const purchaseItem = (id) => {
        console.log(id);
        // add in the axios call and the corresponding server call
        axios.put(`/list/${id}`).then(response => {
            console.log('PUT (purchase) successful.');
            FetchShoppingList();
        }).catch(error => {
            console.log('Failed to PUT: ', error);
            alert('Failed to PUT. See console for details.');
        })

    }

    const resetPurchases = () => {
        axios.put('/list').then(response => {
            console.log('PUT Reset Purchases successful');
            FetchShoppingList();
        }).catch(error => {
            console.log('Failed to PUT:', error);
            alert('Failed to PUT. See console for details.')
        })
    } // end resetPurchases

    return (
        <div className="App">
            <Header />
            <InputForm addItem={addItem}/>
            <main>
                <p>Under Construction...</p>
                <ShoppingList purchaseItem={purchaseItem} shoppingList={shoppingList} resetPurchases={resetPurchases}/>
            </main>
        </div>
    );
}

export default App;
