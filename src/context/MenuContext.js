import React from "react";

const MenuContext = React.createContext({
    allProducts: [],
    setAllProducts: () => {},
    total: 0,
    setTotal: () => {},
    countProducts: 0,
    setCountProducts: () => {},
    basketIconAnimation: false,
    setBasketIconAnimation: () => {},
});

export default MenuContext;