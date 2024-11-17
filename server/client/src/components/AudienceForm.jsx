import React, { useState } from 'react';
import './AudienceForm.css';

const AudienceForm = ({ onSubmit }) => {
  const [conditions, setConditions] = useState([
    { field: 'spending', operator: '>', value: '', logic: 'AND' },
  ]);

  const handleConditionChange = (index, field, value) => {
    const newConditions = [...conditions];
    newConditions[index][field] = value;
    setConditions(newConditions);
  };

  const addCondition = () => {
    setConditions([...conditions, { field: '', operator: '', value: '', logic: 'AND' }]);
  };

  const removeCondition = (index) => {
    const newConditions = conditions.filter((_, i) => i !== index);
    setConditions(newConditions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(conditions);
  };

  return (
    <form onSubmit={handleSubmit}>
      {conditions.map((condition, index) => (
        <div key={index}>
          <select
            value={condition.field}
            onChange={(e) => handleConditionChange(index, 'field', e.target.value)}
          >
            <option value="spending">Total Spending</option>
            <option value="visits">Visits</option>
          </select>

          <select
            value={condition.operator}
            onChange={(e) => handleConditionChange(index, 'operator', e.target.value)}
          >
            <option value=">">&gt;</option>
            <option value="<">&lt;</option>
            <option value="=">=</option>
          </select>

          <input
            type="number"
            value={condition.value}
            onChange={(e) => handleConditionChange(index, 'value', e.target.value)}
          />

          <select
            value={condition.logic}
            onChange={(e) => handleConditionChange(index, 'logic', e.target.value)}
          >
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </select>

          {conditions.length > 1 && (
            <button type="button" onClick={() => removeCondition(index)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={addCondition}>Add Condition</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AudienceForm;
