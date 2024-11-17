import React from 'react';
import './SegmentCard.css';


const SegmentCard = ({ segment, onDelete }) => {
  return (
    <div className="segment-card" style={styles.card}>
      <h3 style={styles.title}>{segment.name}</h3>
      <p style={styles.details}>
        Conditions: {segment.conditions.map((c, i) => (
          <span key={i}>
            {`${c.field} ${c.operator} ${c.value}`}
            {i < segment.conditions.length - 1 ? ` ${c.logic} ` : ''}
          </span>
        ))}
      </p>
      <p style={styles.details}>Estimated Audience Size: {segment.size}</p>
      <button style={styles.deleteButton} onClick={() => onDelete(segment.id)}>
        Delete
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '16px',
    margin: '8px 0',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    margin: 0,
    fontSize: '18px',
  },
  details: {
    margin: '8px 0',
    fontSize: '14px',
    color: '#555',
  },
  deleteButton: {
    padding: '8px 16px',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SegmentCard;
