import { useEffect, useState } from "react";
import "./App.css";
import DiceButton from "./images/icon-dice.svg";

function App() {
  const [adviceSlip, setAdviceSlip] = useState(null);

  useEffect(() => {
    fetchAdviceSlipData();
  }, []);

  const fetchAdviceSlipData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((result) => setAdviceSlip(result.slip));
  };

  return (
    <div className="container">
      {!adviceSlip ? (
        ""
      ) : (
        <div className="wrapper">
          <div className="card">
            <div className="card--elements">
              <h4 className="card--header">
                ADVICE <span className="slip-id">#{adviceSlip.id}</span>
              </h4>
              <q className="card--quote">{adviceSlip.advice}</q>
            </div>
            <p className="divider"></p>
          </div>
          <button className="dice-button" onClick={fetchAdviceSlipData}>
            <img src={DiceButton} alt="fetch advice button" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
