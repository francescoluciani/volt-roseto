import "./Goals.css";

function Goal({ number, name, text }) {
  return (
    <div className="objective-card">
      <div className="objective-small">
        <h2 className="objective-number">{number}</h2>
      </div>
      <div className="objective-big">
        <div className="objective-name">
          <p className="objective-title">{name}</p>
        </div>
        <div className="objective-text-box">
          <p className="objective-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Goal;
