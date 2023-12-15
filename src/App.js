import { useState, useRef } from "react";
 
import "bootstrap/dist/css/bootstrap.min.css";
 
function App() {
  const [kmi, setKmi] = useState(0);
 
  const [error, setError] = useState("");
 
  const svoris = useRef();
  const ugis = useRef();
 
  const textss = () => {
    if (kmi < 18) {
      return (
        <h3 className="my-5">
          Jūsų svoris <span className="text-warning">per mažas</span> Jūsų kūno
          masės indeksas yra {kmi}
        </h3>
      );
    }
 
    if (kmi >= 18 && kmi <= 25) {
      return (
        <h3 className="my-5">
          Jūsų svoris <span className="text-success">Normalus</span> Jūsų kūno
          masės indeksas yra {kmi}
        </h3>
      );
    }
 
    if (kmi > 25 && kmi <= 30) {
      return (
        <h3 className="my-5">
          Jūsų svoris <span Style="color: rgb(224, 120, 16)">per didelis</span>{" "}
          Jūsų kūno masės indeksas yra {kmi}
        </h3>
      );
    }
 
    if (kmi > 30) {
      return (
        <h3 className="my-5">
          Jūsų svoris{" "}
          <span className="text-danger">per didelis (nutukimas)</span> Jūsų kūno
          masės indeksas yra {kmi}
        </h3>
      );
    }
  };
 
  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
 
    if (ugis.current.value === "" || svoris.current.value === "") {
        setKmi(0);
      return setError("Klaida! prašome užpildyti visus laukelius");
    }
 
    const ugis1 = Number(ugis.current.value);
    const svoris1 = Number(svoris.current.value);
    const calc = ((svoris1 / (ugis1 * ugis1)) * 10000).toFixed(2);
    setKmi(calc);
  };
 
  const resetHandler = () => {
    setKmi(0);
    ugis.current.value = "";
    svoris.current.value = "";
  };
 
  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-5">Kūno masės indekso skaičiuoklė</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <input
              ref={svoris}
              type="number"
              className="form-control"
              placeholder="Svoris KG"
            />
          </div>
          <div className="mb-3">
            <input
              ref={ugis}
              type="number"
              className="form-control"
              placeholder="Ugis CM"
            />
          </div>
          {error && <p className="mt-4">{error}</p>}
          <button className="btn btn-outline-primary mt-2" type="submit">
            Skaičiuoti
          </button>
          {kmi !== 0 && (
            <button className="btn btn-secondary mt-2 ms-2" type="reset">
              Atstatyti
            </button>
          )}
        </form>
 
        {kmi !== 0 && (
          <div className="mt-5">
            <h1>Jūsų masės indeksas</h1>
            {textss()}
            <button
              onClick={resetHandler}
              className="btn btn-secondary mt-2"
              type="button"
            >
              Skaičiuoti iš naujo
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
 