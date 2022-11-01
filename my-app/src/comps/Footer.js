import "../css/footer.css";
import map from "../media/footer-map.png";
import mapMobile from "../media/footer-map-mobile.png";

import logoOutline from "../media/logo-outline.svg";

export default function Footer() {
  return (
    <div className="footer--wrapper" id="locations">
      <div className="footer--content">
        <h1>
          <span id="footer--our">Our</span> Locations
        </h1>
        <img id="footer--map-img" src={map} alt="Locations map" />
        <img id="footer--map-img-mobile" src={mapMobile} alt="Locations map" />
      </div>
      <div className="footer--info">
        <div className="footer--col1">
          <img src={logoOutline} alt="Logo" />
          <p>
            The Yooshi Japanese Cuisine brand is a fictitius restaurant created
            with the purpose of developing a functional React web app to display
            on a portfolio.
          </p>
        </div>
        <div className="footer--col2">
          <p>4873 SOUTHWEST BLVD.</p>
          <p>9483 E 12TH ST.</p>
          <p>1938 WOODLAND AVE.</p>
          <p>5810 BROOKLYN AVE.</p>
        </div>
        <div className="footer--col3">
          <p>816-436-0032</p>
          <p>816-098-3422</p>
          <p>816-745-2325</p>
          <p>816-098-0347</p>
          <a href="mailto:leo@leodeleon.co">
            <p>
              <span>HELLO@YOOSHI.COM</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
