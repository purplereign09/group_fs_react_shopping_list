import {useState} from 'react';


function InputForm(){
    const onSubmit = (evt) => {
        evt.preventDefault(); 
        console.log(('submitted!'));
        
        }

    return (
        < >
            <h1>Add Item</h1>
            <form onSubmit={onSubmit}>

                <div>
                    <label>Item:</label>
                        <input type="text" placeholder="item"/>
                </div>
                <div> 
                    <label>Quantity:</label>
                        <input type="text" placeholder="item"/>
                
                    <label>Unit:</label>
                        <input type="text" placeholder="item"/>
                </div>
            
                <div>

                <button type="submit">Save</button>
                
                </div>
            
            </form>

        </>
    );
}

export default InputForm;
