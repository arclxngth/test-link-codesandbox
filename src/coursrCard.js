const CourseCard = ({ props }) => {
  return (
    <>
      <table class="table is-bordered mb-3">
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
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CourseCard;
