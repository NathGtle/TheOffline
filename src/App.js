import './Styles/App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Utilitary from './Screens/Utilitary';
import Report from './Screens/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Utilitary />} />
        <Route path="/report" caseSensitive={false} element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
