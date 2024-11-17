import React, { useState } from 'react';
import AudienceForm from '../components/AudienceForm';

const CreateSegment = () => {
  const [audienceSize, setAudienceSize] = useState(0);

  const handleFormSubmit = (conditions) => {
    // Simulate audience size calculation
    const size = Math.floor(Math.random() * 1000);
    setAudienceSize(size);

    console.log('Submitted Conditions:', conditions);
  };

  return (
    <div>
      <h1>Create Audience Segment</h1>
      <AudienceForm onSubmit={handleFormSubmit} />
      {audienceSize > 0 && <p>Estimated Audience Size: {audienceSize}</p>}
    </div>
  );
};

export default CreateSegment;
