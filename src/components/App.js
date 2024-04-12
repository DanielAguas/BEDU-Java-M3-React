import { useState } from 'react';
import Menu from './Menu';
import TituloMenu from './TituloMenu';
import Cart from './Cart';
import ModalCart from './ModalCart';
import styles from '../styles/cart.module.css'; // Importa los estilos necesarios

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [basketIconAnimation, setBasketIconAnimation] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDeleteProduct = platillo => {
    const results = allProducts.filter(item => item.id !== platillo.id);
    setAllProducts(results);
    setBasketIconAnimation(true);
    setTimeout(() => setBasketIconAnimation(false), 500);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setBasketIconAnimation(true);
    setTimeout(() => setBasketIconAnimation(false), 500);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
      {/* Botón para abrir el modal del carrito */}
      <button onClick={handleOpenModal}>Abrir Carrito</button>
      {/* Renderiza el modal del carrito si isModalOpen es true */}
      {isModalOpen && (
        <ModalCart onClose={handleCloseModal}>
          {/* Contenido del carrito */}
          <div className={`container-cart-products ${isModalOpen ? '' : 'hidden-cart'}`}>
            {allProducts.length ? (
              <>
                <div className='row-product'>
                  {allProducts.map(platillo => (
                    <div className='cart-product' key={platillo.id}>
                      <div className='info-cart-product'>
                        <span className='cantidad-producto-carrito'>
                          {platillo.quantity}
                        </span>
                        <p className='titulo-producto-carrito'>
                          {platillo.tipo}
                        </p>
                        <span className='precio-producto-carrito'>
                          ${platillo.precio * platillo.quantity}
                        </span>
                      </div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className={styles['icon-close']} // Utiliza los estilos para el icono de cierre
                        onClick={() => onDeleteProduct(platillo)} // Utiliza la función onDeleteProduct
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </div>
                  ))}
                </div>

                <div className='cart-total'>
                  <h3>Total: </h3>
                  <span className='total-pagar'>${total}</span>
                </div>

                <button className={styles['btn-clear-all']} onClick={onCleanCart}> {/* Utiliza los estilos y la función para vaciar la canasta */}
                  Vaciar Canasta
                </button>
              </>
            ) : (
              <h3 className='cart-empty'>La canasta está vacía</h3>
            )}
          </div>
        </ModalCart>
      )}
    </div>
  );
}

export default App;