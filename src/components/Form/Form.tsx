import "./Form.css";

const options = ["Friends", "Search Engine", "Advertisement", "Other"];

const Form = () => {
  return (
    <>
      <div className="form">
        {/* Form Title */}
        <div className="plan-title">WE'RE HAPPY TO HEAR FROM YOU</div>
        <hr />
        {/* Form */}
        <form className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="route">How did you find us?</label>
            <select id="route" name="route" required>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="news">Newsletter?</label>
            <div className="form-news">
              <input type="checkbox" className="checkbox" />
              <div>Yes, please</div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Drop us a line</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <div className="send">
              <button>Send it!</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
