import { useState, useEffect } from "react";

import CourseCard from "./component/coursrCard";
import CourseForm from "./component/courseForm";

function App() {
  const [ID, setID] = useState(620610819);
  const [person, setPerson] = useState([]);

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
    return person.map((value) => {
      return (
        <CourseCard
          {...value}
          setPerson={setPerson}
          person={person}
          key={Math.random()}
        />
      );
    });
  }

  function renderForm() {
    return <CourseForm setPerson={setPerson} person={person} />;
  }

  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      const buffer = localStorage.getItem("data");
      const data_list = JSON.parse(buffer);
      setPerson(data_list);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(person));
  }, [person.length]);

  // const persons = [
  //   {
  //     name: "Bob",
  //     gender: "male",
  //     age: "50"
  //   },
  //   {
  //     name: "Alice",
  //     gender: "male",
  //     age: "20"
  //   }
  // ];

  return (
    <div className="ml-2">
      {/* Code me please! */}
      <div className="mb-4">
        <h3 className="title is-3">DUMMY</h3>
        <p>{ID}</p>
        <button onClick={reduce}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={increase}>+</button>
      </div>

      {renderForm()}

      {/* Convert me to a component! */}
      {/* <h3 class="title is-3">Person List</h3>
      <CourseCard props={me} /> */}
      {renderPerson()}
    </div>
  );
}

export default App;
