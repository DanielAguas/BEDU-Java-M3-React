import React, { useContext } from "react";
import Platillo from "./Platillo";
import Card from "./Card";
import "../styles/menu.css";
import MenuContext from "../context/MenuContext";

function Menu() {
  const {
    allProducts,
    setAllProducts,
    setBasketIconAnimation
  } = useContext(MenuContext);

  const menu = [
    {
      id: 1,
      tipo: "Pastor",
      descripcion: "Carne de cerdo marinada en especias como achiote, chile y ajo.",
      precio: 18
    },
    {
      id: 2,
      tipo: "Suadero",
      descripcion: "Corte de res procedente de la región abdominal del animal, cocido lentamente hasta alcanzar una textura tierna y jugosa.",
      precio: 18.00
    },
    {
      id: 3,
      tipo: "Longaniza",
      descripcion: "Embutido de carne de cerdo sazonado con especias como ajo, pimienta y orégano, cocinado a la plancha.",
      precio: 15.00
    },
    {
      id: 4,
      tipo: "Bistec",
      descripcion: "Trozos de carne de bistec, típicamente de res, marinados y asados a la parrilla.",
      precio: 15.00
    },
    {
      id: 5,
      tipo: "Campechano",
      descripcion: "Ofrece una mezcla sabrosa de dos tipos de carne, típicamente bistec y chorizo, combinados para crear una explosión de sabores.",
      precio: 16.00
    },
    {
      id: 6,
      tipo: "Tripa",
      descripcion: "Trozos crujientes de tripa de res, fritos hasta alcanzar una textura crujiente por fuera y tierna por dentro.",
      precio: 25.00
    }
  ];

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