function ShoppingItem({item}) {
    console.log(' in shoppingitem: ', item);
    return (
        <li>
            <p>{item.item} <br></br>{item.quantity} {item.unit}</p>
            <button>Buy</button>
            <button>Remove</button>
        </li>
    );
};



export default ShoppingItem;