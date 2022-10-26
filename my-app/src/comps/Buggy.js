import "../css/buggy.css";
import { useState, useContext } from "react";
import { Context } from "./context/Context";

export default function Buggy() {
  const { cart } = useContext(Context);
  console.log(cart);
  return (
    <section className="buggy--wrapper">
      <p></p>
    </section>
  );
}
