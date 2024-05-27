import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";

function RainbowEdition() {
  const [mouseClicks, setMouseClicks] = useState([]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      const newHearts = [];
      const numHearts = getRandomInt(10, 40);

      for (let i = 0; i < numHearts; i++) {
        const randomDx = getRandomInt(-300, 500) + "px";
        const randomDy = getRandomInt(-300, 500) + "px";

        const randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(
          0,
          255
        )}, ${getRandomInt(0, 255)})`;

        newHearts.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          dx: randomDx,
          dy: randomDy,
          color: randomColor,
        });
      }

      setMouseClicks((prevClicks) => [...prevClicks, ...newHearts]);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      {mouseClicks.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            position: "absolute",
            top: heart.y,
            left: heart.x,
            transform: `translate(-50%, -50%) scale(2)`,
            "--dx": heart.dx,
            "--dy": heart.dy,
            color: heart.color,
          }}>
          <Icon name="heart" size="massive" />
        </span>
      ))}
    </>
  );
}

export default RainbowEdition;
