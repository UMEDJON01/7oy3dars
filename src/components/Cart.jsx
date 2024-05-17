
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
            <button onClick={() => dispatch(removeItem(item))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
