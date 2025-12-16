import { useState } from "react";

export default function MyButton() {
    const[count,setCount]=useState(0);

    function handleClick()
        {
        setCount(count+1);
    }

    return <>
    <h1>This is State Example</h1>
     <button onClick={handleClick}   
     style={{ 
    backgroundColor: "#3395f0d6", 
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#d32020aa",
    border: "none",
    cursor: "pointer"
  }}> 
          Clicked {count} times
        </button>
    </>
}
