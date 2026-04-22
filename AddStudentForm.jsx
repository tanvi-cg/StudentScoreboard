import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    
    if (score === '' || isNaN(score)) {
      setError('Valid score is required');
      return;
    }

    const numScore = parseInt(score, 10);
    if (numScore < 0 || numScore > 100) {
      setError('Score must be between 0 and 100');
      return;
    }

    onAdd(name, score);
    setName('');
    setScore('');
    setError('');
  };

  return (
    <div className="form-wrapper">
      <h3 className="form-title">Add New Student</h3>
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="input-group">
          <label>Student Name</label>
          <input 
            type="text" 
            placeholder="e.g. John Doe" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label>Exam Score</label>
          <input 
            type="number" 
            placeholder="0-100" 
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        {error && <p className="error-msg">{error}</p>}

        <button type="submit" className="submit-btn">
          Register Student
        </button>
      </form>

      <style>{`
        .form-wrapper { width: 100%; }
        .form-title { margin-bottom: 1.5rem; font-size: 1.25rem; }
        .add-student-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .input-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .input-group label { font-size: 0.875rem; color: var(--text-muted); font-weight: 500; }
        .submit-btn {
          background: var(--primary);
          color: white;
          padding: 0.75rem;
          font-size: 1rem;
          margin-top: 0.5rem;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }
        .submit-btn:hover {
          background: var(--primary-hover);
          transform: translateY(-1px);
        }
        .error-msg {
          color: var(--danger);
          font-size: 0.8125rem;
          margin-top: -0.5rem;
        }
      `}</style>
    </div>
  );
};

export default AddStudentForm;
