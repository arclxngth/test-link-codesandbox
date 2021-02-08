import { useState } from "react";

const CourseForm = (props) => {
  // const [ ID, setID ] = useState(0);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(0);

  function addPerson() {
    if (name == "" || gender == "" || age == "") {
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
              <input onChange={(e) => setName(e.target.value)} />
            </td>
            <td>
              <input onChange={(e) => setGender(e.target.value)} />
            </td>
            <td>
              <input onChange={(e) => setAge(e.target.value)} />
            </td>
            <td>
              <button onClick={addPerson}> Click </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CourseForm;
