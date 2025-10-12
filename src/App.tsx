import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import environment from "./environment";
function App() {
  const [count, setCount] = useState(0);
  async function getdata() {
    try {
      const res = await fetch(`${environment.Server}/weatherforecast`);
      if (res.ok) {
        const data = await res.json();
        setCount(data.length);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {environment.Server} </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
