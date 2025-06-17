import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
 const [color, setColor] = useState("olive"); 
 // koristimo hook useState za upravljanje stanjem boje

//  function changeColor(color) {
//   setColor(color)
//  }

  return (
    <div className="bg-amber-300 w-full h-screen duration-200 rounded-4xl " style={{ backgroundColor: color }}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red") } className=" py-2 roundedfont-bold uppercase cursor-pointer bg-red-500">
            red
          </button>
           <button onClick={() => setColor("blue") } className=" py-2 roundedfont-bold uppercase cursor-pointer bg-blue-600">
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
