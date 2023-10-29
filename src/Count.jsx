import React, { useState } from "react";

export default function Count() {
    let [count, setCount] = useState(0);
    
function handleClick(){
    setCount(count + 1)
}
function handleMinus(){
    if(count !== 0){
    setCount(count - 1)
}   
}
function sbros(){
    setCount(0)
}

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={handleClick}>Плюс</button>
      <button onClick={handleMinus} >Минус</button>
      <button onClick={sbros}>Сброс</button>
    </div>
  )
}
