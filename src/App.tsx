import { useEffect, useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import environment from "./environment";
function App() {
  const [obtion, setObtion] = useState(1);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function getdata() {
      try {
        //  'http://dev.api.zar.com/api/Actor/Actors?Name=majid' \
        const url = `${environment.Server}/Actor/Actors?Name=maj `;
        console.log("url", url);
        const res = await fetch(`${environment.Server}/Actor/Actors?Name=maj`, {
          headers: { accept: "text/plain" },
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setActors(data);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }
    getdata();
  }, []);
  function handleSelectedForm(selectedOption: number) {
    setObtion(selectedOption);
  }
  function formView() {
    if (obtion == 1) {
      return <div>1 {actors && actors.length}</div>;
    } else if (obtion == 2) {
      return <div>2</div>;
    } else if (obtion == 3) {
      return <div>3</div>;
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev buid from jenkins" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <div>
            {/* 'http://dev.api.zar.com/api/Actor/Actors?Name=majid' \ */}
            Url :{`${environment.Server}/actor/actors?name="maj" `} env:{" "}
            {environment.Environment}
          </div>
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
