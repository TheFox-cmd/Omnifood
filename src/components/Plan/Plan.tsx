import "./Plan.css";

const plans = [
  {
    level: "Premium",
    price: "$399",
    note: "That’s only 13.30$ per meal",
    feature: [
      "1 meal every day",
      "Order 24/7",
      "Access to newest creations",
      "Free delivery",
    ],
  },
  {
    level: "Pro",
    price: "$149",
    note: "That’s only 14.90$ per meal",
    feature: [
      "1 meal 10 days/month",
      "Order 24/7",
      "Access to newest creations",
      "Free delivery",
    ],
  },
  {
    level: "Starter",
    price: "$19",
    note: null,
    feature: ["1 meal", "Order from 8 am to 12 pm", null, "Free delivery"],
  },
];

const Plan = () => {
  return (
    <div className="plan">
      {/* Customer Title */}
      <div className="title">START EATING HEALTHY TODAY</div>
      <hr />
      {/* Plan Options */}
      <div className="plan-wrapper">
        {plans.map((plan, index) => (
          <div key={index} className="plan-option">
            <div className="plan-quota">
              <div className="plan-level">{plan.level}</div>
              <div className="plan-cost">
                <span className="plan-price">{plan.price}</span>
                {index === plans.length - 1 ? (
                  <span>/meal</span>
                ) : (
                  <span>/month</span>
                )}
              </div>
              <div className="plan-note">{plan.note}</div>
            </div>
            <ul className="plan-feature">
              {plan.feature.map((feature, index) => (
                <li key={index} className={feature ? "tick" : "cross"}>{feature}</li>
              ))}
            </ul>
            <div className="plan-button-wrapper">
              <button className={index === 0 ? "premium" : "regular"}>Sign up now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
