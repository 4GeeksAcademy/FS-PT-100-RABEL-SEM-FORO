import React, { useState } from "react";
import "../../styles/index.css";

const Semaforo = () => {
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const handleAddPurple = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="traffic-light bg-dark p-3 rounded">
        {colors.map((c) => (
          <div
            key={c}
            className={`light ${c} ${color === c ? "glow" : ""}`}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={handleAddPurple}>
        Añadir púrpura
      </button>
    </div>
  );
};

export default Semaforo;
