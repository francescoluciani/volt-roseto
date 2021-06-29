import "./ValueList.css";

function Value({ name, image, quote, text }) {
  return (
    <div className="value">
      <div className="value-box">
        <h2>{name}</h2>
        <div className="value-icon-container">
          <img className="value-icon" src={image} alt="icon" />
        </div>
      </div>
      <div className="value-box">
        <p className="quote">{quote}</p>
      </div>
      <div className="value-box2">
        <p className="long-value">{text}</p>
      </div>
    </div>
  );
}

export default Value;
