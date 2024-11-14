import "./Food.css"

const Food = () => {
  return (
    <div className="food-grid">
      {[...Array(8)].map((_, index) => (
        <div key={index}  className="food-container"><img src={new URL(`../../assets/${index+1}.jpg`, import.meta.url).href} alt={`food-${index}`} className="food" /></div>
      ))}
    </div>
  );
};

export default Food;