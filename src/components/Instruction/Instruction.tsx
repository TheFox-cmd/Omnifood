import "./Instruction.css";
import googlePlay from "../../assets/download-app-android.png";
import appStore from "../../assets/download-app.svg";
import iphone from "../../assets/app-iPhone.png";

const steps = [
  {
    number: "1",
    text: "Choose the subscription plan that best fits your needs and sign up today."
  },
  {
    number: "2",
    text: "Order your delicious meal using our mobile app or website. Or you can even call us!"
  },
  {
    number: "3",
    text: "Enjoy your meal after less than 20 minutes. See you the next time!"
  }
];

const Instruction = () => {
  return (
    <>
      <div className="instruction">
        <div className="title">
          HOW IT WORKS — SIMPLE AS 1, 2, 3
        </div>
        <hr />
        <div className="instruction-wrapper">
          <div className="image-container">
            <img className="image" src={iphone} alt="iPhone App" />
          </div>
          <div className="steps-wrapper">
            {steps.map((step, index) => (
              <div key={index} className="steps">
                <div className="step-number">{step.number}</div>
                <div className="step-text">{step.text}</div>
              </div>
            ))}
            <div className="downloads">
              <img className="appstore" src={appStore} alt="App Store Icon" />
              <img className="googleplay" src={googlePlay} alt="Google Play Icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instruction;
