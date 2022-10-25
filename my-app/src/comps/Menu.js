import "../css/menu.css";
import bg from "../media/menu-bg.svg";

export default function Menu() {
  return (
    <section
      className="menu--wrapper"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1>Menu</h1>
      <div className="menu--card-container"></div>
    </section>
  );
}
