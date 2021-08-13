import ShoppingItem from "../ShoppingItem/ShoppingItem";

function ShoppingList({shoppingList, purchaseItem, resetPurchases}) {

    const ResetButton = () => {
        console.log('Reset Button');
        resetPurchases()

    } // end ResetButton

    return (
        <>
            <h2>Shopping List</h2>
            <button onClick={ResetButton}>Reset</button>
            <button>Clear</button> 
            <ul>
                {shoppingList.map(item => <ShoppingItem item={item} purchaseItem={purchaseItem}/>)}
            </ul>
        </>
    );
};


export default ShoppingList;