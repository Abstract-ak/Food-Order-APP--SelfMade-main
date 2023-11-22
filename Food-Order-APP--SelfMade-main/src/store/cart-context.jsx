import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItemToCart: (item) => {},
    removeItemFromCart: (item) => {},
});

export default CartContext;