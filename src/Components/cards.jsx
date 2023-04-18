import React, { useEffect } from "react";
import "../App.css";
import Image from "../assets/image.jpg";

function Cards({ index, card, handleClick, Check, setCheck }) {
  const handleCards = () => {
    handleClick(card);
  };

  useEffect(() => {
    setTimeout(() => {
      setCheck((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
    }, 5000);
  }, []);

  return (
    <div>
      <div className="Card-Box" onClick={handleCards}>
        <div
          className="Card-Content"
          onClick={() => {
            setCheck((prev) => {
              const next = [...prev];
              next[index] = false;
              if (next.filter((item) => !item).length > 2) {
                return Array(24).fill(true);
              }
              return next;
            });
          }}
        >
          {Check[index] ? (
            <img src={Image} className="img" alt="" />
          ) : (
            <div className="Card-title">{card}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
