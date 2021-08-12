function InputForm(){

    return (
        < >
            <h1>Add Item</h1>
            <form>
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

                <button>Save</button>
                
                </div>
            
            </form>

        </>
    );
}

export default InputForm;
