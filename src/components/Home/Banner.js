import "./Home.css";

function Banner(props) {
  const getBannerMessage = () => {
    if (props.location === "/") {
      return "Volt Roseto è un gruppo di cittadini che guardano al futuro, uniti da spirito di innovazione, voglia di cambiare e passione per la propria città.";
    } else if (props.location === "/chi-siamo") {
      return "Volt Roseto è un'associazione ispirata al movimento politico panaeuropeo Volt Europa.";
    } else if (props.location === "/unisciti") {
      return "Siamo sempre alla ricerca di nuove risorse per il nostro gruppo. Porta le tue idee e le tue competenze! Compila il form o scrivici a voltroseto@gmail.com";
    } else if (props.location === "/membri") {
      return "Professionisti, imprenditori, studenti. Il nostro gruppo è composto da giovani motivati e competenti che desiderano mettere le proprie capacità al servizio della città.";
    }
  };
  return (
    <div className="white-container">
      <div className="banner">
        <p className="banner-intro">{getBannerMessage()}</p>
      </div>
    </div>
  );
}

export default Banner;
