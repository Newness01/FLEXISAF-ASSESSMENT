import { useState, useEffect } from "react";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  // Fetch from API when component loads
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.log(err));
  }, []);

  const addStudent = (student) => {
    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    })
      .then(res => res.json())
      .then(data => setStudents([...students, data]));
  };

  const deleteStudent = (id) => {
    fetch(`http://localhost:5000/students/${id}`, {
      method: "DELETE",
    }).then(() => {
      setStudents(students.filter(student => student.id !== id));
    });
  };

  return (
    <div className="container">
      <h1 className="title">Student Result Manager</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;