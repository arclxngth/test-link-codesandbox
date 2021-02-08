import { useState } from "react";

import CourseCard from "./coursrCard";

function App() {
  const [ID, setID] = useState(620610819);

  function reduce() {
    setID(ID - 1);
  }

  function increase() {
    setID(ID + 1);
  }

  function reset() {
    setID(620610819);
  }

  function renderPerson() {
    return persons.map((value) => {
      return <CourseCard props={value} key={Math.random()} />;
    });
  }

  const me = {
    name: "TOH HOHG LENG",
    gender: "male",
    age: "20"
  };

  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];

  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{ID}</p>
        <button onClick={reduce}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={increase}>+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      <CourseCard props={me} />
      {renderPerson()}
    </div>
  );
}

export default App;
