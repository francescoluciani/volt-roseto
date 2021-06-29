import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="intro-container">
        <p className="intro-text">
          Volt Roseto è un’associazione di cittadini che guardano al futuro e
          che ha come fine ultimo la salvaguardia del
          <span style={{ fontWeight: "bold" }}> benessere</span> e della
          <span style={{ fontWeight: "bold" }}> realizzazione </span>
          dei cittadini rosetani, con particolare riguardo ai più giovani.
          Benessere e realizzazione che Volt Roseto vuole perseguire attraverso
          la promozione di spazi di cultura, programmi di formazione digitale,
          politica e imprenditoriale, cultura della sostenibilità, momenti di
          confronto e scambio culturale fra cittadini.{" "}
        </p>
      </div>

      <h1>I nostri obiettivi</h1>

      <div className="goals">
        <div className="purple-goal">
          Promuovere momenti di scambio culturale, dialogo e confronto,
          specialmente fra i giovani, volti ad accrescere il bagaglio culturale
          degli associati e favorendo la partecipazione alla vita cittadina e
          politica da parte della popolazione.
        </div>
        <div className="yellow-goal">
          Promuovere la cultura, la formazione, nonché la partecipazione
          politica dei cittadini, favorendo sistemi di democrazia partecipativa
          e proponendo un’idea di politica innovativa e contraria agli attuali
          schemi clientelari.
        </div>
        <div className="purple-goal">
          Promuovere programmi di formazione rivolti alla cittadinanza sui temi
          del digitale e dell’imprenditoria giovanile e femminile.
        </div>
        <div className="yellow-goal">
          Stimolare l’amministrazione cittadina per la ricerca e la
          partecipazione a bandi nazionali e comunitari sui temi
          dell’educazione, dell’imprenditoria giovanile, dell’ambiente, della
          cultura e per la promozione del territorio.
        </div>
        <div className="purple-goal">
          Favorire la collaborazione fra amministrazioni limitrofe attraverso un
          più ampio sistema territoriale, nonché una rete integrata di relazioni
          tra attori pubblici e privati, al fine di stimolare una più efficace
          promozione turistica.
        </div>
        <div className="yellow-goal">
          Promuovere una cultura ecologista e porre l’attenzione sull’importanza
          di una svolta climatica all’interno delle politiche locali, regionali,
          nazionali e comunitarie.
        </div>
        <div className="purple-goal">
          Promuovere la parità di genere e lottare affinché la disparità di
          salario fra uomini e donne venga eliminata. A tal proposito,
          l’Associazione Volt Roseto nomina due presidenti, una donna e un uomo
          che operano in regime di co-presidenza.
        </div>
        <div className="yellow-goal">
          Promuovere i valori di democrazia, uguaglianza e parità di genere.
        </div>
        <div className="purple-goal">
          Contrastare i populismi e promuovere lo sviluppo di un’informazione
          sana, basata su fonti attendibili, apolitiche e indipendenti, nonché
          stimolare l’attenzione da parte dei cittadini nel mettere in atto ogni
          azione che prevenga la diffusione di informazioni e notizie false o
          prive di verifica.
        </div>
        <div className="yellow-goal">
          Promuovere l’interculturalismo, politiche di integrazione sociale e
          sostegno delle minoranze culturali.
        </div>
      </div>
    </div>
  );
}

export default About;
