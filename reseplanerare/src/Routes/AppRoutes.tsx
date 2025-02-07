import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ActivityListPage from '../pages/ActivityListPage';
import ActivityFormPage from '../pages/ActivityFormPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ActivityListPage />} />
      <Route path="/form" element={<ActivityFormPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;