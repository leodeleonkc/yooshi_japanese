import "../css/navbar.css";
import { useContext, useState } from "react";
import { Context } from "./context/Context";
import { Squeeze as Hamburger } from "hamburger-react";
import logo from "../media/logo.svg";
import cart from "../media/cart-empty.svg";
import countBg from "../media/count-bg.svg";

export default function NavBar() {
  const { howManyItems, handleCart } = useContext(Context);
  const [mobileMenu, toggleMobileMenu] = useState(false);

  return (
    <div id="top" className="navbar--wrapper">
      <img className="logo" src={logo} alt="Yooshi Japanese Restaurant logo" />
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
          <img onClick={handleCart} src={cart} alt="go to cart" />
          {howManyItems ? (
            <h4
              onClick={handleCart}
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
      <div className="navbar--hamburger">
        <Hamburger
          color="#3f2d20"
          toggled={mobileMenu}
          toggle={toggleMobileMenu}
        />
      </div>
      {mobileMenu ? (
        <div className="navbar--menu-container-mobile">
          <a href="#menu">
            <p onClick={() => toggleMobileMenu(false)}>Menu</p>
          </a>
          <a href="#whyus">
            <p onClick={() => toggleMobileMenu(false)}>Why Us?</p>
          </a>
          <a href="#locations">
            <p onClick={() => toggleMobileMenu(false)}>Locations</p>
          </a>{" "}
          <div className="navbar--item-count ">
            <img
              onClick={() => {
                handleCart();
                toggleMobileMenu(false);
              }}
              src={cart}
              alt="go to cart"
            />
            {howManyItems ? (
              <h4
                onClick={handleCart}
                style={{
                  backgroundImage: `url(${countBg})`,
                  backgroundPosition: `center`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
                id="navbar--how-many-items-mobile"
              >
                {howManyItems}
              </h4>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
