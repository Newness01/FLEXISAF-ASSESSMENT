function StudentList({ students, deleteStudent }) {
  return (
    <>
      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        students.map((student) => (
          <div className="student-card" key={student.id}>
            <span>
              {student.name} | Score: {student.score} | Grade: {student.grade}
            </span>
            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </>
  );
}

export default StudentList;