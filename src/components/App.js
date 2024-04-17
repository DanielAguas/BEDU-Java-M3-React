import React, { useState } from 'react';
import Menu from './Menu';
import TituloMenu from './TituloMenu';
import Cart from './Cart';
import MenuContext from '../context/MenuContext';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [basketIconAnimation, setBasketIconAnimation] = useState(false);

  return (
    <div className='App'>
      <MenuContext.Provider
        value={{
          allProducts,
          setAllProducts,
          total,
          setTotal,
          countProducts,
          setCountProducts,
          basketIconAnimation,
          setBasketIconAnimation,
        }}
      >
        <Cart 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          setTotal={setTotal}
          setBasketIconAnimation={setBasketIconAnimation}
        />
        <TituloMenu />
        <Menu />
      </MenuContext.Provider>
    </div>
  );
}

export default App;