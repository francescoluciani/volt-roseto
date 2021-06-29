import "./Goals.css";
import Goal from "./Goal";

function GoalsList() {
  const obiettivi = [
    {
      number: "1",
      name: "Cultura",
      text:
        "Promozione di spazi di cultura, momenti di scambio culturale, dialogo e confronto, specialmente fra i giovani, volti ad accrescere il bagaglio culturale degli associati e favorendo la partecipazione alla vita cittadina e politica da parte della popolazione.",
    },
    {
      number: "2",
      name: "Sostenibilità",
      text:
        "Promuovere la cultura ecologista e porre l’attenzione sull’importanza di una svolta climatica all’interno delle politiche locali, regionali, nazionali e comunitarie.",
    },
    {
      number: "3",
      name: "Formazione",
      text:
        "Promuovere programmi di formazione rivolti alla cittadinanza sui temi del digitale e dell’imprenditoria giovanile e femminile, anche attraverso la partecipazione a bandi nazionali e comunitari.",
    },
    {
      number: "4",
      name: "Trasparenza",
      text:
        "Promuovere la cultura, la formazione, nonché la partecipazione politica dei cittadini, favorendo sistemi di democrazia partecipativa e proponendo un’idea di politica innovativa e contraria agli attuali schemi clientelari. ",
    },
  ];

  return (
    <div className="purple-container">
      <div className="claim">
        <h1 className="objective-claim">Roseto 2026: i nostri obiettivi</h1>
      </div>

      <div className="obiettivi">
        {obiettivi.map((obiettivo) => (
          <Goal
            number={obiettivo.number}
            name={obiettivo.name}
            text={obiettivo.text}
          />
        ))}
      </div>
    </div>
  );
}

export default GoalsList;
