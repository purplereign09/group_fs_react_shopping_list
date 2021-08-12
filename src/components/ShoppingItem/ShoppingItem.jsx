function ShoppingItem({item, purchaseItem}) {
    
    const resetButton = () => {
        // grab item id from the surrounding context (state)
        // purchaseItem(item.id)
        console.log(item);
        // send back the data
    }


    return (
        <li>
            <p>{item.item} <br></br>{item.quantity} {item.unit}</p>
            {/* add conditional rendering in here */}
            <button onClick={resetButton}>Buy</button>
            <button>Remove</button>
        </li>
    );
};



export default ShoppingItem;