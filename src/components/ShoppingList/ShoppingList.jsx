import ShoppingItem from "../ShoppingItem/ShoppingItem";


function ShoppingList({shoppingList, deleteShoppingItem}) {

function ShoppingList({shoppingList, purchaseItem, resetPurchases}) {

    const ResetButton = () => {
        console.log('Reset Button');
        resetPurchases()

    } // end ResetButton

    return (
        <>
            <h2>Shopping List</h2>
            <div>
                <button onClick={ResetButton}>Reset</button>
                <button>Clear</button> 
            </div>
            {shoppingList.map(item => <ShoppingItem item={item} purchaseItem={purchaseItem}/>)}

        </>
    );
};


export default ShoppingList;