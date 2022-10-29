import "../css/navbar.css";
import { useContext } from "react";
import { Context } from "./context/Context";
import logo from "../media/logo.svg";
import cart from "../media/cart-empty.svg";
import countBg from "../media/count-bg.svg";

export default function NavBar() {
  const { howManyItems, setViewCart } = useContext(Context);

  return (
    <div id="top" className="navbar--wrapper">
      <img src={logo} alt="Yooshi Japanese Restaurant logo" />
      <div className="navbar--menu-container">
        <a href="#menu">
          <p>Menu</p>
        </a>
        <a href="#whyus">
          <p>Why Us?</p>
        </a>
        <a href="#locations">
          <p>Locations</p>
        </a>{" "}
        <div className="navbar--item-count">
          <img onClick={() => setViewCart(true)} src={cart} alt="go to cart" />
          {howManyItems ? (
            <h4
              style={{
                backgroundImage: `url(${countBg})`,
                backgroundPosition: `center`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              id="navbar--how-many-items"
            >
              {howManyItems}
            </h4>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
