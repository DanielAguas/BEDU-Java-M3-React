import React, { useContext, useState, useEffect } from "react"; // Agrega useEffect a la importación
import Platillo from "./Platillo";
import Card from "./Card";
import "../styles/menu.css";
import MenuContext from "../context/MenuContext";
import useHttp from '../hooks/use-http'; // Importa el hook useHttp

function Menu() {
  const {
    allProducts,
    setAllProducts,
    setBasketIconAnimation
  } = useContext(MenuContext);
  const { isLoading, error, request } = useHttp(); // Usa el hook useHttp
  const [menu, setMenu] = useState([]);

  // Función para obtener el menú desde la base de datos
  const fetchMenu = async () => {
    try {
      const data = await request({ url: 'URL_DEL_MENÚ' }); // Reemplaza 'URL_DEL_MENÚ' con la URL correcta
      // Aquí puedes procesar los datos recibidos y establecer el menú
      console.log(data);
    } catch (error) {
      console.error('Error al obtener el menú:', error);
    }
  };

  // Llama a fetchMenu cuando se monta el componente
  useEffect(() => {
    fetchMenu();
  }, []);

  const onAddProduct = (platillo) => {
    setAllProducts([...allProducts, platillo]);
    setBasketIconAnimation(true);
    setTimeout(() => setBasketIconAnimation(false), 500);
  };

  return (
    <Card className="menu-container">
      {menu.map((platillo) => (
        <Platillo
          key={platillo.id}
          id={platillo.id}
          tipo={platillo.tipo}
          descripcion={platillo.descripcion}
          precio={platillo.precio}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          onAddProduct={onAddProduct}
          platillo={platillo}
          setBasketIconAnimation={setBasketIconAnimation}
        />
      ))}
    </Card>
  );
}

export default Menu;