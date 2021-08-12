
function ShoppingItem({item}) {

    return(
       
         <li>
                {item.item}{item.quantity} {item.unit}
                <button>Buy</button>
                <button>Remove</button>
        </li>  

    )
}

export default ShoppingItem