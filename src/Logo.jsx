import React, { useState } from "react";

export default function Logo() {
  const [count, setCount] = useState(0);

  function hadleClick() {
    setCount(count + 1);
  }
  function handleMinus() {
    if (count != 0) {
      setCount(count - 1);
    }
  }
  function sbros() {
    setCount(0);
  }
  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={hadleClick}>Плюс</button>
      <button onClick={handleMinus}>Минус</button>
      <button onClick={sbros}>Сбросить</button>
    </div>
  );
}
