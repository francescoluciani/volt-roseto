import Value from "./Value";
import "./ValueList.css";

function ValueList() {
  const values = [
    {
      name: "Equità sociale",
      image: "https://i.ibb.co/LQV0SZ8/21-Social-Equality-Outlined.png",
      quote: '“The Earth is what we all have in common."— Wendell Berry"',
      text:
        "Crediamo in un futuro a zero emissioni. Ogni piccolo comune si deve assumere le responsabilità connesse al suo ruolo nelle sfide globali, e in particolare nel cambiamento climatico, nella sicurezza alimentare e idrica, nella salute pubblica, nella gestione dell'immigrazione e nella crisi dei rifugiati.",
    },
    {
      name: "Ecologismo",
      image: "https://i.ibb.co/sQDZzS2/Global-Balance.png",
      quote: '“The Earth is what we all have in common."— Wendell Berry"',
      text:
        "Crediamo in un futuro a zero emissioni. Ogni piccolo comune si deve assumere le responsabilità connesse al suo ruolo nelle sfide globali, e in particolare nel cambiamento climatico, nella sicurezza alimentare e idrica, nella salute pubblica, nella gestione dell'immigrazione e nella crisi dei rifugiati.",
    },
    {
      name: "Progressismo",
      image: "https://i.ibb.co/gRhvwzt/23-Citizen-Empowerment-Outlined.png",
      quote: '“The Earth is what we all have in common."— Wendell Berry"',
      text:
        "Crediamo in un futuro a zero emissioni. Ogni piccolo comune si deve assumere le responsabilità connesse al suo ruolo nelle sfide globali, e in particolare nel cambiamento climatico, nella sicurezza alimentare e idrica, nella salute pubblica, nella gestione dell'immigrazione e nella crisi dei rifugiati.",
    },
    {
      name: "Europeismo",
      image: "https://i.ibb.co/XjbsDv7/1-Volt-Europe.png",
      quote: '“The Earth is what we all have in common."— Wendell Berry"',
      text:
        "Crediamo in un futuro a zero emissioni. Ogni piccolo comune si deve assumere le responsabilità connesse al suo ruolo nelle sfide globali, e in particolare nel cambiamento climatico, nella sicurezza alimentare e idrica, nella salute pubblica, nella gestione dell'immigrazione e nella crisi dei rifugiati.",
    },
    {
      name: "Digitalizzazione",
      image: "https://i.ibb.co/ZS9WqJt/24-EU-Reform-Outlined.png",
      quote: '“The Earth is what we all have in common."— Wendell Berry"',
      text:
        "Crediamo in un futuro a zero emissioni. Ogni piccolo comune si deve assumere le responsabilità connesse al suo ruolo nelle sfide globali, e in particolare nel cambiamento climatico, nella sicurezza alimentare e idrica, nella salute pubblica, nella gestione dell'immigrazione e nella crisi dei rifugiati.",
    },
  ];

  return (
    <div className="white-container">
      <div className="claim">
        <h1>I nostri valori</h1>
      </div>

      <div className="values">
        {values.map((value) => (
          <Value
            name={value.name}
            image={value.image}
            quote={value.quote}
            text={value.text}
          />
        ))}
      </div>
    </div>
  );
}

export default ValueList;
