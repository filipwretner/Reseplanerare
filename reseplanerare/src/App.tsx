// App.tsx - Main component, handles over-arching application logic and coordinates other components
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import ActivityForm from './components/form/ActivityForm';
import ActivityList from './components/list/ActivityList';
import Filter from './components/utils/Filter';
import { ActivityManager } from './components/utils/ActivityManager';

function App(): JSX.Element {
  interface Activity {
    name: string;
    firstDate: string;
    secondDate: string;
    location: string;
    id: string;
  } 

  const [activities, setActivities] = useState<Activity[]>(ActivityManager.getActivities()); 
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null); 
  const [filter, setFilter] = useState(''); 
  const [loading, setLoading] = useState(true); 
  

  useEffect(() => { // Loads data with a timer

    setTimeout(() => {
      const initialActivities = ActivityManager.getActivities(); 
      setActivities(initialActivities);
      setLoading(false);
    }, 1000); // Loading time = 1 second

  }, []);

  const handleAddActivity = (name: string, firstDate: string, secondDate: string, location: string) => {
    ActivityManager.add(name, firstDate, secondDate, location);
    setActivities([...ActivityManager.getActivities()]);
  };

  const handleDeleteActivity = (id: string) => {
    ActivityManager.delete(id);
    setActivities([...ActivityManager.getActivities()]);
  };

  const handleEditActivity = (id: string, name: string, firstDate: string, secondDate: string, location: string) => {
    ActivityManager.edit(id, name, firstDate, secondDate, location);
    setActivities([...ActivityManager.getActivities()]);
    setEditingActivity(null);
  };

  const handleStartEditing = (id: string) => {
    const activity = activities.find((activity) => activity.id === id);
    setEditingActivity(activity || null);
  };

  const filteredActivities = activities.filter((activity) =>
    activity.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Header title="Semesterplaneraren" />
      {loading ? ( <p className="error-message">Laddar aktiviteter...</p>
      ) : (
        <>
          <ActivityForm
            onAddActivity={handleAddActivity}
            onEditActivity={handleEditActivity}
            editingActivity={editingActivity}
          />
          <Filter filter={filter} onFilterChange={setFilter} placeholder="Sök aktiviteter..." />
          <ActivityList
            activities={filteredActivities}
            onDeleteActivity={handleDeleteActivity}
            onEditActivity={handleStartEditing}
          />
        </>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
