import { useState } from 'react';
import Menu from './Menu';
import TituloMenu from './TituloMenu';
import Cart from './Cart';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [basketIconAnimation, setBasketIconAnimation] = useState(false);

  return (
    <div className='App'>
      <TituloMenu />
      <Cart 
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
        setBasketIconAnimation={setBasketIconAnimation}
      />
      <Menu 
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setBasketIconAnimation={setBasketIconAnimation}
      />
    </div>
  );
}

export default App;