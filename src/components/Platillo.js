// Componente Platillo
import Card from "./Card";

const Platillo = ({ 
  id, 
  tipo, 
  descripcion, 
  precio, 
  allProducts, 
  setAllProducts
}) => {  
  
  const addingProduct = () => {
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
  };

  return (
    <Card className="platillo">
      <h2><strong>{tipo}</strong></h2>
      <p><em>{descripcion}</em></p>
      <h5>Precio c/u: <strong style={{ color: 'red' }}>${precio}</strong></h5>
      <button className="boton-carrito" onClick={addingProduct}>
        Añadir al Carrito
      </button>
    </Card>
  );
};

export default Platillo;