import { useState } from "react";

const CourseForm = (props) => {
  // const [ ID, setID ] = useState(0);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  function addPerson() {
    if (name === "" || gender === "" || age === "") {
      alert("All data pls");
    } else {
      const person = { name, gender, age };
      props.setPerson([...props.person, person]);
    }
  }

  return (
    <>
      <table className="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>
              <input onChange={(e) => setName(e.target.value)} value={name} />
            </td>
            <td>
              <input
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              />
            </td>
            <td>
              <input onChange={(e) => setAge(e.target.value)} value={age} />
            </td>
            <td>
              <button
                onClick={(e) => {
                  addPerson(e);
                  setName("");
                  setGender("");
                  setAge("");
                }}
              >
                {" "}
                Click{" "}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CourseForm;
