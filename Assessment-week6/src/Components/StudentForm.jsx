import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !score) return;

    const grade =
      score >= 70
        ? "A"
        : score >= 60
        ? "B"
        : score >= 50
        ? "C"
        : score >= 45
        ? "D"
        : "F";

    addStudent({ name, score, grade });

    setName("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;