import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ActivityList from '../components/list/ActivityList';
import Filter from '../components/utils/Filter';
import { ActivityManager } from '../components/utils/ActivityManager';

interface Activity {
  name: string;
  firstDate: string;
  secondDate: string;
  location: string;
  id: string;
}

const ActivityListPage: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>(ActivityManager.getActivities());
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setActivities(ActivityManager.getActivities());
  }, []);

  const handleDeleteActivity = (id: string) => {
    ActivityManager.delete(id);
    setActivities([...ActivityManager.getActivities()]);
  };

  const handleEditActivity = (id: string) => {
    navigate(`/form?id=${id}`);
  };

  const filteredActivities = activities.filter(activity =>
    activity.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Filter filter={filter} onFilterChange={setFilter} placeholder="Sök aktiviteter..." />
      <ActivityList
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
        onEditActivity={handleEditActivity}
      />
    </>
  );
};

export default ActivityListPage;