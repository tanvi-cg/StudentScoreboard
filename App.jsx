import React, { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import './App.css';

const initialStudents = [
  { id: 1, name: 'Alice Johnson', score: 85 },
  { id: 2, name: 'Bob Smith', score: 32 },
  { id: 3, name: 'Charlie Brown', score: 45 },
  { id: 4, name: 'Diana Prince', score: 92 },
  { id: 5, name: 'Ethan Hunt', score: 38 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: parseInt(score, 10),
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, score: parseInt(newScore, 10) || 0 } : student
    ));
  };

  const avgScore = students.length > 0 
    ? (students.reduce((acc, s) => acc + s.score, 0) / students.length).toFixed(1) 
    : 0;
  const passCount = students.filter(s => s.score >= 40).length;
  const passRate = students.length > 0 
    ? ((passCount / students.length) * 100).toFixed(0) 
    : 0;

  return (
    <div className="app-container">
      <Header title="Student Scoreboard" />
      
      <div className="stats-bar">
        <div className="stat-card">
          <span className="stat-label">Total Students</span>
          <span className="stat-value">{students.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Average Score</span>
          <span className="stat-value">{avgScore}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Pass Rate</span>
          <span className="stat-value">{passRate}%</span>
        </div>
      </div>

      <main className="content">
        <section className="form-section">
          <AddStudentForm onAdd={addStudent} />
        </section>
        <section className="table-section">
          <StudentTable students={students} onUpdateScore={updateScore} />
        </section>
      </main>
    </div>
  );
}

export default App;
