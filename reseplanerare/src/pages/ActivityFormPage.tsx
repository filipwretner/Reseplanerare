import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ActivityForm from '../components/form/ActivityForm';
import { ActivityManager } from '../components/utils/ActivityManager';

const ActivityFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activityId = searchParams.get('id');
  const editingActivity = activityId ? ActivityManager.getActivities().find(a => a.id === activityId) : null;

  const handleAddActivity = (name: string, firstDate: string, secondDate: string, location: string) => {
    ActivityManager.add(name, firstDate, secondDate, location);
    navigate('/');
  };

  const handleEditActivity = (id: string, name: string, firstDate: string, secondDate: string, location: string) => {
    ActivityManager.edit(id, name, firstDate, secondDate, location);
    navigate('/');
  };

  return (
    <ActivityForm
      onAddActivity={handleAddActivity}
      onEditActivity={handleEditActivity}
      editingActivity={editingActivity || null}
    />
  );
};

export default ActivityFormPage;