import {useState} from 'react';


function InputForm(){

    const [itemName, setItemName] = useState('');
    const [quantityName, setQuantityName] = useState('');
    const [unitName, setUnitName] = useState('');

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
                        <input 
                            type="text" 
                            placeholder="item" 
                            value={itemName}
                            onChange={(evt) => setItemName(evt.target.value)}
                        />
                </div>
                <div> 
                    <label>Quantity:</label>
                         <input 
                            type="text" 
                            placeholder="item" 
                            value={quantityName}
                            onChange={(evt) => setQuantityName(evt.target.value)}
                        />
                
                    <label>Unit:</label>
                        <input  
                            type="text" 
                            placeholder="item" 
                            value={unitName}
                            onChange={(evt) => setUnitName(evt.target.value)}
                        />
                </div>
            
                <div>

                <button type="submit">Save</button>
                
                </div>
            
            </form>

        </>
    );
}

export default InputForm;
