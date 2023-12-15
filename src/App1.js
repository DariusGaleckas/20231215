import { useState, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

 
function App() {



  
  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-5">Kūno masės indekso skaičiuoklė</h1>
        <form>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Svoris kg"
            />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" placeholder="Ugis cm" />
          </div>
          <button className="btn btn-outline-primary mt-2" type="submit">
            Skaičiuoti
          </button>
          <button className="btn btn-secondary mt-2 ms-2" type="reset">
            Atstatyti
          </button>
        </form>
 
        <div className="mt-5">
          <h1>Jūsų masės indeksas</h1>
          <h3 className="my-5">2324</h3>
          <button className="btn btn-secondary mt-2" type="button">
            Skaičiuoti iš naujo
          </button>
        </div>
      </div>
    </>
  );
}
export default App;