import "../css/card.css";
import { useState } from "react";

export default function Card({ dinner }) {
  const [smlOrder, setSmlOrder] = useState(false);
  const [medOrder, setMedOrder] = useState(false);
  const [lrgOrder, setLrgOrder] = useState(false);
  const [viewIngreds, setViewIngreds] = useState(false);

  const [count, setCount] = useState({
    sml: 1,
    med: 1,
    lrg: 1,
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
            {!smlOrder ? (
              <button onClick={() => setSmlOrder(true)} id="card--order-btn">
                Order
              </button>
            ) : (
              <button id="card--order-btn-order">
                <span onClick={() => handleMinus("sml", null)}>-</span>
                <span>{sml}</span>
                <span onClick={() => handlePlus("sml", null)}>+</span>
              </button>
            )}
          </div>{" "}
          <div className="card--data-medium">
            <p id="card--data-size">M</p>
            <p id="card--data-price">${dinner.medium}</p>
            {!medOrder ? (
              <button onClick={() => setMedOrder(true)} id="card--order-btn">
                Order
              </button>
            ) : (
              <button id="card--order-btn-order">
                <span onClick={() => handleMinus("med", null)}>-</span>
                <span>{med}</span>
                <span onClick={() => handlePlus("med", null)}>+</span>
              </button>
            )}
          </div>
          <div className="card--data-large">
            <p id="card--data-size">L</p>
            <p id="card--data-price">${dinner.large}</p>
            {!lrgOrder ? (
              <button onClick={() => setLrgOrder(true)} id="card--order-btn">
                Order
              </button>
            ) : (
              <button id="card--order-btn-order">
                <span onClick={() => handleMinus("lrg", null)}>-</span>
                <span>{lrg}</span>
                <span onClick={() => handlePlus("lrg", null)}>+</span>
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
