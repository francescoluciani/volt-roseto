import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="main-footer">
      <h3 className="title-footer">
        Volt<span> Roseto</span>
      </h3>
      <div className="icons">
        <FontAwesomeIcon icon={["fab", "instagram"]} className="icons-footer" />
        <FontAwesomeIcon icon={["fab", "facebook"]} className="icons-footer" />
        <FontAwesomeIcon icon={["fab", "whatsapp"]} className="icons-footer" />
      </div>
      <hr />
      <div>
        <p className="footer">
          &copy;{new Date().getFullYear()} Volt Roseto | Tutti i diritti
          riservati
        </p>
      </div>
    </div>
  );
}

export default Footer;
