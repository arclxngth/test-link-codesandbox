const CourseCard = (props) => {
  function deletePerson() {
    props.setPerson(props.person.filter((list) => list.name !== props.name));
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
            <td>{props.name}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
            <td>
              <button onClick={deletePerson}>X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CourseCard;
