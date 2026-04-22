import React from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  const isPass = student.score >= 40;

  return (
    <tr className="student-row">
      <td className="student-name">{student.name}</td>
      <td className="student-score-cell">
        <input 
          type="number" 
          value={student.score} 
          onChange={(e) => onUpdateScore(student.id, e.target.value)}
          className="score-input"
          min="0"
          max="100"
        />
      </td>
      <td className="student-status">
        <span className={`status-badge ${isPass ? 'pass' : 'fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>

      <style>{`
        .student-row {
          transition: all 0.2s ease;
        }
        .student-row:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(4px);
        }
        .student-row td {
          padding: 1rem;
          border-bottom: 1px solid var(--border);
          vertical-align: middle;
        }
        .student-name {
          font-weight: 500;
        }
        .score-input {
          width: 70px;
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          padding: 0.4rem;
        }
        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .status-badge.pass {
          background: rgba(16, 185, 129, 0.15);
          color: var(--success);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .status-badge.fail {
          background: rgba(239, 68, 68, 0.15);
          color: var(--danger);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
      `}</style>
    </tr>
  );
};

export default StudentRow;
