import "../css/card.css";
import { useState, useContext } from "react";
import { Context } from "./context/Context";

export default function Card({ dinner }) {
  const { addItems, removeItems } = useContext(Context);

  const [smlOrder, setSmlOrder] = useState(false);
  const [medOrder, setMedOrder] = useState(false);
  const [lrgOrder, setLrgOrder] = useState(false);
  const [viewIngreds, setViewIngreds] = useState(false);

  const [count, setCount] = useState({
    sml: 0,
    med: 0,
    lrg: 0,
  });

  function handlePlus(val) {
    setCount({
      ...count,
      [val]: count[val] + 1,
    });
  }

  function handleMinus(val) {
    setCount({
      ...count,
      [val]: count[val] === 0 ? count[val] : count[val] - 1,
    });
  }

  const { sml, med, lrg } = count;

  return (
    <section className="card--wrapper">
      <div className="card--inner">
        <img src={dinner.url} alt="dinner menu" />
        <p>{dinner.item}</p>
        <div className={viewIngreds ? "hidden" : ""}>
          <div className="card--data-small">
            <p id="card--data-size">S</p>
            <p id="card--data-price">${dinner.small}</p>
            {!smlOrder || sml < 1 ? (
              <button
                onClick={() => {
                  setSmlOrder(true);
                  handlePlus("sml", null);
                  addItems(dinner, "small");
                }}
                id="card--order-btn"
              >
                Order
              </button>
            ) : (
              <button id="card--order-btn-order">
                <span
                  onClick={() => {
                    handleMinus("sml", null);
                    removeItems(dinner, "small");
                  }}
                >
                  -
                </span>
                <span>{sml}</span>
                <span
                  onClick={() => {
                    handlePlus("sml", null);
                    addItems(dinner, "small");
                  }}
                >
                  +
                </span>
              </button>
            )}
          </div>{" "}
          <div className="card--data-medium">
            <p id="card--data-size">M</p>
            <p id="card--data-price">${dinner.medium}</p>
            {!medOrder || med < 1 ? (
              <button
                onClick={() => {
                  setMedOrder(true);
                  handlePlus("med", null);
                  addItems(dinner, "medium");
                }}
                id="card--order-btn"
              >
                Order
              </button>
            ) : (
              <button id="card--order-btn-order">
                <span
                  onClick={() => {
                    handleMinus("med", null);
                    removeItems(dinner, "medium");
                  }}
                >
                  -
                </span>
                <span>{med}</span>
                <span
                  onClick={() => {
                    handlePlus("med", null);
                    addItems(dinner, "medium");
                  }}
                >
                  +
                </span>
              </button>
            )}
          </div>
          <div className="card--data-large">
            <p id="card--data-size">L</p>
            <p id="card--data-price">${dinner.large}</p>
            {!lrgOrder || lrg < 1 ? (
              <button
                onClick={() => {
                  setLrgOrder(true);
                  handlePlus("lrg", null);
                  addItems(dinner, "large");
                }}
                id="card--order-btn"
              >
                Order
              </button>
            ) : (
              <button id="card--order-btn-order">
                <span
                  onClick={() => {
                    handleMinus("lrg", null);
                    removeItems(dinner, "large");
                  }}
                >
                  -
                </span>
                <span>{lrg}</span>
                <span
                  onClick={() => {
                    handlePlus("lrg", null);
                    addItems(dinner, "large");
                  }}
                >
                  +
                </span>
              </button>
            )}{" "}
          </div>
        </div>
        <div className={!viewIngreds ? "hidden" : "centered"}>
          <p id="ingreds">{dinner.ingreds}</p>
        </div>
        <button
          onClick={() => setViewIngreds(!viewIngreds)}
          id="card--order-ingredients-btn"
        >
          Ingredients
        </button>
      </div>
    </section>
  );
}
