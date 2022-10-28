import "../css/footer.css";
import map from "../media/footer-map.png";

export default function Footer() {
  return (
    <div className="footer--wrapper">
      <div className="footer--content">
        <h1>
          <span id="footer--our">Our</span> Locations
        </h1>
        <img src={map} alt="Locations map" />
      </div>
    </div>
  );
}
