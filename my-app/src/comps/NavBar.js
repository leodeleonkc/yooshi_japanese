import "../css/navbar.css";
import logo from "../media/logo.svg";
import cart from "../media/cart-empty.svg";

export default function NavBar() {
  return (
    <div className="navbar--wrapper">
      <img src={logo} alt="Yooshi Japanese Restaurant logo" />
      <div className="navbar--menu-container">
        <p>Menu</p>
        <p>Locations</p>
        <p>Delivery</p>
        <img src={cart} alt="go to cart" />
      </div>
    </div>
  );
}
