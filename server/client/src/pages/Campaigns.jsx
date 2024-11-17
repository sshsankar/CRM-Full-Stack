import React, { useState } from 'react';
import CampaignHistory from '../components/CampaignHistory';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([
    { name: 'Holiday Promo', date: '2024-11-01', size: 500 },
    { name: 'Summer Sale', date: '2024-10-01', size: 800 },
  ]);

  return <CampaignHistory campaigns={campaigns} />;
};

export default Campaigns;
