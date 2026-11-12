import { useState } from "react";
import Task1City from "./Task1City";
import Task2CityClass from "./Task2CityClass";
import Task3Book from "./Task3Book";
import Task4BookClass from "./Task4BookClass";

const tasks = [
  { label: "Завдання 1 — місто (функц.)", view: <Task1City /> },
  { label: "Завдання 2 — місто (класи)", view: <Task2CityClass /> },
  { label: "Завдання 3 — книга (функц.)", view: <Task3Book /> },
  { label: "Завдання 4 — книга (класи)", view: <Task4BookClass /> },
];

export default function App() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="tabs">
        {tasks.map((t, i) => (
          <button key={t.label} className={i === active ? "active" : ""} onClick={() => setActive(i)}>
            {t.label}
          </button>
        ))}
      </div>
      {tasks[active].view}
    </>
  );
}
