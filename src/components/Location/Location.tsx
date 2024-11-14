import "./Location.css";
import lisbon from "../../assets/lisbon-3.jpg";
import sanfrancisco from "../../assets/san-francisco.jpg";
import berlin from "../../assets/berlin.jpg";
import london from "../../assets/london.jpg";

const locationCards = [
  {
    image: lisbon,
    title: "LISBON",
    info: [
      {
        icon: "ion-ios-person",
        info: "1600+ happy eaters",
      },
      {
        icon: "ion-ios-star",
        info: "60+ top chefs",
      },
      {
        icon: "ion-social-twitter",
        info: "@omnifood_lx",
      },
    ]
  },
  {
    image: sanfrancisco,
    title: "SAN FRANCISCO",
    info: [
      {
        icon: "ion-ios-person",
        info: "3700+ happy eaters",
      },
      {
        icon: "ion-ios-star",
        info: "160+ top chefs",
      },
      {
        icon: "ion-social-twitter",
        info: "@omnifood_sf",
      },
    ]
  },
  {
    image: berlin,
    title: "BERLIN",
    info: [
      {
        icon: "ion-ios-person",
        info: "2300+ happy eaters",
      },
      {
        icon: "ion-ios-star",
        info: "110+ top chefs",
      },
      {
        icon: "ion-social-twitter",
        info: "@omnifood_berlin",
      },
    ]
  },
  {
    image: london,
    title: "LONDON",
    info: [
      {
        icon: "ion-ios-person",
        info: "1200+ happy eaters",
      },
      {
        icon: "ion-ios-star",
        info: "50+ top chefs",
      },
      {
        icon: "ion-social-twitter",
        info: "@omnifood_london",
      },
    ]
  },
];

const Location = () => {
  return (
    <div className="location">
      {/* Introduction Title */}
      <div className="location-title">WE'RE CURRENTLY IN THESE CITIES</div>
      <hr />
      {/* Location Cards */}
      <div className="location-card-wrapper">
        {locationCards.map((card, index) => (
          <div key={index} className="location-card">
            <img
              src={card.image}
              alt={card.title}
              className="location-card-image"
            />
            <div className="location-card-title">{card.title}</div>
            {card.info.map((info, index) => (
              <div key={index} className="location-card-info">
                <i className={info.icon} />
                {index === card.info.length - 1 ? (
                  <a href="">{info.info}</a>
                ) : (
                  <div>{info.info}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
