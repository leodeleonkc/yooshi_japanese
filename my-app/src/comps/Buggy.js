import "../css/buggy.css";
import { useState, useContext } from "react";
import { Context } from "./context/Context";

export default function Buggy() {
  const { addSmall, removeSmall, smallItems, mediumItems, largeItems } =
    useContext(Context);
  console.log(smallItems);
  console.log(mediumItems);
  console.log(largeItems);
  return (
    <section className="buggy--wrapper">
      <p></p>
    </section>
  );
}
