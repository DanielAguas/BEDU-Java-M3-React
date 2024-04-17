import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import TituloMenu from './TituloMenu';
import Cart from './Cart';
import MenuContext from '../context/MenuContext';
import useHttp from '../hooks/use-http';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [basketIconAnimation, setBasketIconAnimation] = useState(false);
  const { isLoading, error, request } = useHttp();

  
  const fetchMenu = async () => {
    try {
      const data = await request({ url: 'https://react-tacos-default-rtdb.firebaseio.com/' });
      
      console.log(data);
    } catch (error) {
      console.error('Error al obtener el menú:', error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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