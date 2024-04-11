import { useState } from 'react';
import Card from "./Card";
import styles from '../styles/platillo.module.css';

const Platillo = ({ 
  id, 
  tipo, 
  descripcion, 
  precio, 
  allProducts, 
  setAllProducts,
  setBasketIconAnimation
}) => {
  const [buttonAnimation, setButtonAnimation] = useState(false);

  const addingProduct = () => {
    setButtonAnimation(true);
    setTimeout(() => setButtonAnimation(false), 500);

    const existingProduct = allProducts.find(item => item.id === id);
    if (existingProduct) {
      const updatedProducts = allProducts.map(item => 
        item.id === existingProduct.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, { id, tipo, descripcion, precio, quantity: 1 }]);
    }
    
    setBasketIconAnimation(true);
    setTimeout(() => setBasketIconAnimation(false), 500);
  };

  return (
    <Card className="platillo">
      <h2><strong>{tipo}</strong></h2>
      <p><em>{descripcion}</em></p>
      <h5>Precio c/u: <strong style={{ color: 'red' }}>${precio}</strong></h5>
      <button className={`${styles['boton-carrito']} ${buttonAnimation ? styles['animate'] : ''}`} onClick={addingProduct}>
        Añadir al Carrito
      </button>
    </Card>
  );
};

export default Platillo;