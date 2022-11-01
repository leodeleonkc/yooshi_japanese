import "../css/menu.css";
import { useContext } from "react";
import { Context } from "./context/Context";
import bg from "../media/menu-bg.svg";
import Card from "./Card";
import Basket from "./Basket";
import menuData from "./data/menu.json";

export default function Menu() {
  const { viewCart, handleCart } = useContext(Context);

  const CardElements = menuData.menu.map((menu) => {
    return <Card key={menu.id} dinner={menu} />;
  });

  return (
    <section
      className="menu--wrapper"
      id="menu"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <h1>Menu</h1>
      {viewCart ? <Basket /> : null}

      <div className="menu--card-container">{CardElements}</div>
      <p className="menu--cart-btn" onClick={handleCart}>
        Go To Cart
      </p>
      <div className="menu--spacer"></div>
    </section>
  );
}
