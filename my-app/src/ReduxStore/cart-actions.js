import { uiActions } from "./ui-slice";
import { cartAction } from "./cart-slice";

export const getCartData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch(
        "https://my-demo-project-fe08c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("not geting any data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await getData();

      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuatity: cartData.totalQuatity,
        })
      );
      dispatch(
        uiActions.notificationStaus({
          status: "success",
          title: "Success!",
          message: "Fetching cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notificationStaus({
          status: "error",
          title: "Error accured!",
          message: "Fetching cart data error!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.notificationStaus({
        status: "Pending...",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const fetchData = async () => {
      const response = await fetch(
        "https://my-demo-project-fe08c-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending data is failed!");
      }
    };
    try {
      await fetchData();

      dispatch(
        uiActions.notificationStaus({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notificationStaus({
          status: "error",
          title: "Error accured!",
          message: "Sending cart data error!",
        })
      );
    }
  };
};
