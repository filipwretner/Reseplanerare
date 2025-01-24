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

  const [activities, setActivities] = useState<Activity[]>(ActivityManager.getAll()); // Value is Activity and is imported from the ActivityManager
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null); // Value is either an Activity or null
  const [filter, setFilter] = useState(''); // Value is empty until we change the state
  const [loading, setLoading] = useState(true); // Value is a boolean that is used to check if all the data has been loaded
  

  useEffect(() => { // Gets activited once, loads data with a timer

    setTimeout(() => {
      const initialActivities = ActivityManager.getAll(); // Hämta initial data
      setActivities(initialActivities);
      setLoading(false);
    }, 1000); // Laddningstid = 1 sekund

  }, []);

  const handleAddActivity = (name: string, firstDate: string, secondDate: string, location: string) => {
    ActivityManager.add(name, firstDate, secondDate, location);
    setActivities([...ActivityManager.getAll()]);
  };

  const handleDeleteActivity = (id: string) => {
    ActivityManager.delete(id);
    setActivities([...ActivityManager.getAll()]);
  };

  const handleEditActivity = (id: string, name: string, firstDate: string, secondDate: string, location: string) => {
    ActivityManager.edit(id, name, firstDate, secondDate, location);
    setActivities([...ActivityManager.getAll()]);
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
      {loading ? ( <p>Laddar aktiviteter...</p>
      ) : (
        <>
          <Filter filter={filter} onFilterChange={setFilter} placeholder="Sök aktiviteter..." />
          <ActivityForm
            onAddActivity={handleAddActivity}
            onEditActivity={handleEditActivity}
            editingActivity={editingActivity}
          />
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
