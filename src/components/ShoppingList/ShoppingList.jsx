import ShoppingItem from "../ShoppingItem/ShoppingItem";

function ShoppingList({shoppingList, deleteShoppingItem}) {
    return (
        <>
            <h2>Shopping List</h2>
            <button>Reset</button>
            <button>Clear</button> 
            <ul>
                {shoppingList.map(item => <ShoppingItem item={item} />)}
            </ul>
        </>
    );
};


export default ShoppingList;