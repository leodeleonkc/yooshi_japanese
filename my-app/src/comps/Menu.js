import "../css/menu.css";
import bg from "../media/menu-bg.svg";
import Card from "./Card";
import menuData from "./data/menu.json";

export default function Menu() {
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
      <div className="menu--card-container">{CardElements}</div>
      <p className="menu--cart-btn">Go To Cart</p>
      <div className="menu--spacer"></div>
    </section>
  );
}
