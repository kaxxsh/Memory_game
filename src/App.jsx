import React, { useEffect, useState } from "react";
import Cards from "./Components/cards";
import "./App.css";

const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11,12];

function App() {
  const [shuffcard, setshuffcard] = useState([]);
  const [first, setfirst] = useState(null);
  const [second, setsecond] = useState(null);
  const [Result, setResult] = useState("");
  const [Check, setCheck] = useState(Array(24).fill(false));
  const [Btn, setBtn] = useState("New Game");

  const handlecards = () => {
    const Cards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ card, id: Math.random() }));
    setshuffcard(Cards);
    setBtn("Restart");
    setResult("");
    setCheck(Array(24).fill(false));
  };

  const handleClick = (card) => {
    first ? setsecond(card) : setfirst(card);
  };

  const handleresult = () => {
    if (first && second) {
      if (first === second) {
        setResult("Match");
      } else {
        setResult("Not Match");
      }
      setfirst(null);
      setsecond(null);
      setBtn("new Game");
    }
  };

  useEffect(() => {
    handleresult();
  }, [second]);

  return (
    <>
      <div className="App-Container">
        <div className="Btn-Container">
          <button className="Btn-Box" onClick={handlecards}>
            {Btn}
          </button>
        </div>
        <div className="Card-Container">
          <div className="Cards">
            {shuffcard.map((card,i) => (
              <Cards
                card={card.card}
                key={card.id}
                index={i}
                handleClick={handleClick}
                {...{ Check, setCheck }}
              />
            ))}
          </div>
        </div>
        <div className="Result">{Result}</div>
      </div>
    </>
  );
}

export default App;
