function ShoppingItem({item, purchaseItem}) {
    
    const resetBuyButton = () => {
        // grab item id from the surrounding context (props)
        purchaseItem(item.id)
        console.log(item.id);
        // send back the data
    }


    return (
        <div className="itemCard">
            <p>{item.item} <br></br>{item.quantity} {item.unit}</p>
            {/* add conditional rendering in here */}
            {item.purchased === true ? 'Purchased' : <><button onClick={resetBuyButton}>Buy</button> <button>Remove</button></>}
        </div>
    );
};



export default ShoppingItem;