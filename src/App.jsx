// src/App.jsx
import React from "react";
import { Calender } from "./Calender"; // 경로 주의! export 이름이 `export const Calender`임
import "./_style.scss";
import "./_theme.scss";
import "./_common.scss";

function App() {
  return (
    <div className="App">
      <h1>📅 My Calendar App</h1>
      <Calender />
    </div>
  );
}

export default App;
