import React from 'react';

const Header = ({ title }) => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={subtitleStyle}>Monitor and manage academic performance in real-time.</p>
    </header>
  );
};

const headerStyle = {
  textAlign: 'left',
  borderLeft: '4px solid var(--primary)',
  paddingLeft: '1.5rem',
  margin: '1rem 0'
};

const titleStyle = {
  fontSize: '2.5rem',
  color: 'var(--text-main)',
  marginBottom: '0.5rem'
};

const subtitleStyle = {
  color: 'var(--text-muted)',
  fontSize: '1rem'
};

export default Header;
