import ShoppingItem from '../ShoppingItem/ShoppingItem'
function ShoppingList ({shoppingList}) {
    return (
      <ul>
          {/* Pass feature components to this function */}
        {shoppingList.map(item => <ShoppingItem item ={item}/>)}
      </ul>
    );


}

export default ShoppingList;