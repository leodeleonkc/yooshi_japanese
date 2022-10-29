import "../css/basket.css";
import "../css/card.css";
import "../css/menu.css";
import process from "../media/payment-yooshi2.gif";

import { useState, useContext } from "react";
import { Context } from "./context/Context";
import modalBg from "../media/modal-bg.svg";

export default function Basket() {
  const { cartItems, addItems, removeItems, setViewCart } = useContext(Context);

  const [didOrder, setDidOrder] = useState(false);

  function handleDone() {
    window.location.reload();
    return false;
  }

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      (item.size === "small"
        ? item.small * item.qty
        : item.size === "medium"
        ? item.medium * item.qty
        : item.size === "large"
        ? item.large * item.qty
        : null),
    0
  );

  const myTax = totalPrice * 0.09;
  const finalPrice = totalPrice + myTax;

  function handleClose() {
    setViewCart(false);
    document.body.style.overflow = "auto";
  }
  return (
    <section
      style={{ backgroundImage: `url(${modalBg})` }}
      className="basket--wrapper"
    >
      <div className="basket--content">
        {!cartItems.length ? (
          <div>
            <h1>Basket is empty 🥢</h1>
            <p style={{ textAlign: "center", paddingBottom: "2rem" }}>
              Add some items to your basket and come back!
            </p>
            <p className="basket--continue-shopping" onClick={handleClose}>
              ← Continue Shopping
            </p>
          </div>
        ) : !didOrder && cartItems.length ? (
          <div>
            <h1>Basket Items</h1>

            {cartItems.map((item) => (
              <div className="basket--full-basket">
                <div className="grid-container">
                  <div className="grid-item">
                    <img className="basket--img" src={item.url} alt="Food" />
                  </div>
                  <div className="grid-item">
                    <h2>{item.item}</h2> <p>{item.size}</p>
                  </div>
                  <div className="grid-item">
                    <button
                      className="basket--qty-btn"
                      id="card--order-btn-order"
                    >
                      <span
                        onClick={() => {
                          removeItems(item, item.size);
                        }}
                      >
                        -
                      </span>
                      <span>{item.qty}</span>
                      <span
                        onClick={() => {
                          addItems(item, item.size);
                        }}
                      >
                        +
                      </span>
                    </button>
                  </div>
                  <div className="grid-item">
                    <p className="basket--price">
                      $
                      {item.size === "small"
                        ? (item.small * item.qty).toFixed(2)
                        : item.size === "medium"
                        ? (item.medium * item.qty).toFixed(2)
                        : item.size === "large"
                        ? (item.large * item.qty).toFixed(2)
                        : null}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <hr />

            <p className="basket--total-price basket--tax">
              Tax: <strong>${myTax.toFixed(2)}</strong>
            </p>
            <p className="basket--total-price">
              Total: <strong>${finalPrice.toFixed(2)}</strong>
            </p>
            <p className="menu--cart-btn" onClick={() => setDidOrder(true)}>
              Place Order
            </p>
            <p className="basket--continue-shopping" onClick={handleClose}>
              ← Continue Shopping
            </p>
          </div>
        ) : didOrder ? (
          <div className="basket--placed-order">
            <img
              className="basket--processing-order-img"
              src={process}
              alt="Placing order"
            />
            <p className="basket--continue-shopping" onClick={handleDone}>
              ← Go Back
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
