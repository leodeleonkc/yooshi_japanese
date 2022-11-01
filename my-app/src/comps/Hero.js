import "../css/hero.css";
import hero from "../media/hero-img-mobile.png";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import wiggles from "../media/wiggles.svg";
import food from "../media/hero-food.png";
import splash from "../media/hero-splash.svg";
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
      <div id="hero--img-mobile">
        <img src={hero} alt="A plate of delicious sushi" />
      </div>
      <div className="hero--fun-wrapper">
        <MouseParallaxContainer resetOnLeave>
          <MouseParallaxChild
            factorX={0.01}
            factorY={0.01}
            updateStyles={{
              background: `url(${splash})`,
              position: "absolute",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxWidth: "639.3px",
              width: "100%",
              height: "100%",
            }}
          ></MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.09}
            factorY={0.1}
            updateStyles={{
              position: "absolute",
              left: "5%",
              top: "75%",
            }}
          >
            <img src={ell1} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.02} factorY={0.02}>
            <img
              src={food}
              alt="Illustration of a plate of sushi"
              className="hero--food-img"
            />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.03}
            factorY={0.03}
            updateStyles={{
              position: "absolute",
              right: "5%",
              top: "15%",
            }}
          >
            <img src={ell2} alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.01}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              right: "3%",
              top: "5%",
            }}
          >
            <img src={ell3} alt="" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
}
