import "./Introduction.css";

const introAboutTexts = [
  "Hello, we're Omnifood, your new premium food delivery service. We know you're always busy.",
  "No time for cooking. So let us take care of that, we're really good at it, we promise!",
];

const introBlocks = [
  {
    icon: "ion-ios-infinite-outline",
    title: "Up to 365 days/year",
    text: "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.",
  },
  {
    icon: "ion-ios-stopwatch-outline",
    title: "Ready in 20 minutes",
    text: "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.",
  },
  {
    icon: "ion-ios-nutrition-outline",
    title: "100% organic",
    text: "All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!",
  },
  {
    icon: "ion-ios-cart-outline",
    title: "Order anything",
    text: "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
  },
];

const Introduction = () => {
  return (
    <div className="intro">
      {/* Introduction Title */}
      <div className="title">GET FOOD FAST — NOT FAST FOOD</div>
      <hr />
      {/* Introduction Description */}
      <div className="intro-about-wrapper">
        {introAboutTexts.map((text, index) => (
          <div key={index} className="intro-about">
            {text}
          </div>
        ))}
      </div>
      {/* Introduction Perks */}
      <div className="intro-block-wrapper">
        {introBlocks.map((block, index) => (
          <div key={index} className="intro-block">
            <i className={block.icon}></i>
            <div className="intro-block-title">{block.title}</div>
            <div className="intro-block-text">{block.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
