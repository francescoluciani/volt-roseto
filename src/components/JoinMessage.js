import "./JoinMessage.css";
import { Link } from "react-router-dom";

function JoinMessage() {
  return (
    <div className="white-container">
      <div className="join-message-container">
        <h2>Vuoi far parte del gruppo?</h2>
        <Link to="/unisciti">
          <button className="join-btn">Scrivici!</button>
        </Link>
      </div>
    </div>
  );
}

export default JoinMessage;
