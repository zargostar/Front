import { useEffect, useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import environment from "./environment";
function App() {
  const [obtion, setObtion] = useState(1);
  async function getdata() {
    try {
      const res = await fetch(`${environment.Server}/weatherforecast`);
      if (res.ok) {
        const data = await res.json();
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getdata();
  }, []);
  function handleSelectedForm(selectedOption: number) {
    setObtion(selectedOption);
  }
  function formView() {
    if (obtion == 1) {
      return <div>1</div>;
    } else if (obtion == 2) {
      return <div>2</div>;
    } else if (obtion == 3) {
      return <div>3</div>;
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleSelectedForm(parseInt(e.target.value))
          }
        >
          <option value={1}>Form pne</option>
          <option value={2}>Form Two</option>
          <option value={3}>Form Tree</option>
        </select>
        {formView()}
      </div>
    </>
  );
}

export default App;
