import "../css/hero.css";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import wiggles from "../media/wiggles.svg";
import food from "../media/hero-food.png";
import ell1 from "../media/hero-food-ellipse-1.svg";
import ell2 from "../media/hero-food-ellipse-2.svg";
import ell3 from "../media/hero-food-ellipse-3.svg";

export default function Hero() {
  return (
    <section className="hero--wrapper">
      <div className="hero--main-title">
        <h1>
          <span>If You Love Sushi </span>
          <span>Then You'll Love </span>
          <span style={{ backgroundImage: `url(${wiggles})` }}>
            Y<span>o</span>
            <span>o</span>
            <span>shi</span>
          </span>{" "}
          🥢
        </h1>
      </div>

      <div className="hero--fun-wrapper">
        <MouseParallaxContainer>
          <MouseParallaxChild factorX="{0.03}" factorY="{0.05}">
            <img src={ell1} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX="{0.07}" factorY="{0.08}">
            <img src={ell2} alt="" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
}
