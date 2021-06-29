import "./Members.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Member({ name, surname, img, linkedin, github }) {
  return (
    <div className="member-container">
      <img className="member-img" src={img} alt="" />
      <h2 className="member-title">{name}</h2>
      <h2 className="member-title">{surname}</h2>
      <p className="bio">Sviluppatore web, esperto di startup e innovazione.</p>
      <div className="icons-container">
        <a href={linkedin}>
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Member;
