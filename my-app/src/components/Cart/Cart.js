import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((eachItem) => (
          <CartItem
            key={eachItem.id}
            item={{
              id: eachItem.id,
              title: eachItem.title,
              quantity: eachItem.quantity,
              total: eachItem.totalPrice,
              price: eachItem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
