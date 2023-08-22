import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../ReduxStore/ui-slice";

const CartButton = (props) => {
  const cartQuatity = useSelector((state) => state.cart.totalQuatity);
  const dispatch = useDispatch();

  const buttonHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={buttonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuatity}</span>
    </button>
  );
};

export default CartButton;
