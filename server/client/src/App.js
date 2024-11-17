import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateSegment from './pages/CreateSegment';
import Campaigns from './pages/Campaigns';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateSegment />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Routes>
    </Router>
  );
}

export default App;

