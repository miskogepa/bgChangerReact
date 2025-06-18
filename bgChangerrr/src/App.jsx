import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
 const [color, setColor] = useState("olive"); 
 // koristimo hook useState za upravljanje stanjem boje
 // const [color, setColor] = useState("olive"); // inicijalna boja
 // Unutar zagrada možeš da pišeš svoje nazive Na primer:
 // const [mojaBoja, promeniBoju] = useState("olive");

 /*
 U ovom kodu:

color je promenljiva koja čuva trenutno stanje (u ovom slučaju, trenutnu boju). Kada želiš da prikažeš ili koristiš trenutnu vrednost, koristiš color.

setColor je funkcija kojom menjaš vrednost promenljive color. Kada želiš da promeniš boju, pozoveš setColor("novaBoja").

Primer korišćenja:

Ovo je deo React-ovog sistema za upravljanje stanjem u komponentama.
 

Tu se koristi useState.

useState je React hook koji omogućava komponentama da imaju svoje stanje.
Kada napišeš const [color, setColor] = useState("olive");, koristiš useState da napraviš promenljivu (color) i funkciju za njenu promenu (setColor), a početna vrednost je "olive".
Primer u funkcionalnoj komponenti:

import React, { useState } from "react";

function Primer() {
  const [color, setColor] = useState("olive");

  return (
    <div>
      <p>Trenutna boja: {color}</p>
      <button onClick={() => setColor("blue")}>Promeni u plavu</button>
    </div>
  );
}

Dakle, useState omogućava da komponenta "pamti" neku vrednost i da je menja tokom vremena.
 
 
 
 \*/




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
