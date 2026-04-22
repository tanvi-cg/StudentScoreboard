import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <div className="table-wrapper">
      <h2 className="section-title">Class Roster</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentRow 
              key={student.id} 
              student={student} 
              onUpdateScore={onUpdateScore} 
            />
          ))}
        </tbody>
      </table>
      
      <style>{`
        .table-wrapper {
          width: 100%;
        }
        .section-title {
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          color: var(--text-main);
        }
        .student-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .student-table th {
          padding: 1rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--border);
        }
      `}</style>
    </div>
  );
};

export default StudentTable;
