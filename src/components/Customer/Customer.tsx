import "./Customer.css";

const customers = [
  {
    name: "Alberto Duncan",
    review:
      "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!",
  },
  {
    name: "Joana Silva",
    review:
      "Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!",
  },
  {
    name: "Milton Chapman",
    review:
      "I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!",
  },
];

const Customer = () => {
  return (
    <>
      <div className="customer">
        {/* Customer Title */}
        <div className="title">
          OUR CUSTOMERS CAN'T LIVE WITHOUT US
        </div>
        <hr />
        {/* Customer Reviews */}
        <div className="customer-review-wrapper">
          {customers.map((customer, index) => (
            <blockquote key={index} className="customer-review">
              <div className="quote">“</div>
              <div className="customer-review-text">{customer.review}</div>
              <div key={index} className="customer-container">
                <img
                  src={
                    new URL(
                      `../../assets/customer-${index + 1}.jpg`,
                      import.meta.url
                    ).href
                  }
                  alt={`customer-${index}`}
                  className="customer-profile"
                />
                <div className="customer-review-name">{customer.name}</div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </>
  );
};

export default Customer;
