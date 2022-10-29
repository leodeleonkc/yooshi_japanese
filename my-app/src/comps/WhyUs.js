import "../css/whyus.css";
import whyUs from "../media/whyus_animation.gif";

export default function WhyUs() {
  return (
    <div className="whyus--wrapper" id="whyus">
      <h1>
        <span id="whyus--why">Why</span> Us
      </h1>
      <div className="whyus--content">
        <img src={whyUs} alt="Our best qualities" />
        <div className="whyus--text">
          <h2>Our Commitment To Quality</h2>
          <p>
            Yooshi specializes in traditional and contemporary sushi and
            Japanese cuisine. Each dish is crafted with care by our experienced
            chefs and attentive staff. We use only the finest fresh ingredients
            and strive to provide the highest quality of service. We offer
            contactless delivery to the KC Metro area 24/7 from any of our 4
            different locations.
          </p>
          <p>
            We truly value our guests, so we are devoted to making every visit a
            satisfying experience. Our 4.9 star average rating from near 1000
            happy customers speaks for itself.
          </p>
          <p>
            We look forward to serving you. Place your delivery order above and
            enjoy the finest Japanese Cuisine in the Midwest!
          </p>
        </div>
      </div>
    </div>
  );
}
