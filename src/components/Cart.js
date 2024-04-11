import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/cart.module.css';
import "../styles/cart.css";

const Cart = ({ allProducts, setAllProducts }) => {
  const [active, setActive] = useState(false);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    let totalCount = 0;
    allProducts.forEach(product => {
      totalPrice += product.precio * product.quantity;
      totalCount += product.quantity;
    });
    setTotal(totalPrice);
    setCountProducts(totalCount);
  }, [allProducts]);

  const onDeleteProduct = platillo => {
    const results = allProducts.filter(item => item.id !== platillo.id);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
  };

  return (
    <header>
      <div className='container-icon'>
        <div className='container-cart-icon' onClick={() => setActive(!active)}>
          <FontAwesomeIcon icon={faBasketShopping} className={styles['basket-icon']} />
          <div className={styles['count-products']}>
            <span id={styles['contador-productos']}>{countProducts}</span>
          </div>
        </div>

        <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
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
                      className={styles['icon-close']}
                      onClick={() => onDeleteProduct(platillo)}
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

              <button className={styles['btn-clear-all']} onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <h3 className='cart-empty'>El carrito está vacío</h3>
          )}
        </div>
      </div>
    </header>
  );
};

export default Cart;