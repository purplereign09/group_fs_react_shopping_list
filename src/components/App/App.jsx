import React from 'react';

import Header from '../Header/Header.jsx'
import InputForm from '../input_form/input_form.jsx';
import './App.css';


function App() {




    const addItem = (newItem) => {
        axios.post('/list', newItem)
            console.log('newItem', newItem);
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
