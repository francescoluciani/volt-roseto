import "./Join.css";
import CountrySelector from "./CountrySelector";
import { useState } from "react";

const Join = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <div className="form-container">
      {isSubmitted ? (
        <h1 className="claim-contact">Grazie per averci contattato!</h1>
      ) : (
        <div></div>
      )}

      {/* <Bounce cascade> */}
      <form>
        <label for="fname">Nome</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>

        <label for="lname">Cognome</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        ></input>

        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email.."
        ></input>

        <label for="country">Nazione</label>
        <CountrySelector />

        <label for="subject">Messaggio</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Scrivici e presentati :)"
        ></textarea>

        <input
          className="submit"
          type="submit"
          value="Invia"
          onClick={handleSubmit}
        ></input>
      </form>
      {/* </Bounce> */}
    </div>
  );
};

export default Join;
