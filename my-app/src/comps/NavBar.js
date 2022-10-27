import "../css/navbar.css";
import { useContext } from "react";
import { Context } from "./context/Context";
import logo from "../media/logo.svg";
import cart from "../media/cart-empty.svg";

export default function NavBar() {
  const { howManyItems, setViewCart } = useContext(Context);

  return (
    <div id="top" className="navbar--wrapper">
      <img src={logo} alt="Yooshi Japanese Restaurant logo" />
      <div className="navbar--menu-container">
        <a href="#menu">
          <p>Menu</p>
        </a>
        <p>Locations</p>
        <p>Delivery</p>
        <div className="navbar--item-count">
          <img onClick={() => setViewCart(true)} src={cart} alt="go to cart" />
          {howManyItems ? (
            <h4 id="navbar--how-many-items">{howManyItems}</h4>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
