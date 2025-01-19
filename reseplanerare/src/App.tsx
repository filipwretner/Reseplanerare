import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';
  
let activities: {name: string; firstDate: string; secondDate: string; location: string; id: string;}[] = []; 

function loadFromLocalStorage(): void {

  const storedActivities = localStorage.getItem('activities');

  if (storedActivities) {
    activities = JSON.parse(storedActivities);
  }
}

function saveToLocalStorage(): void {
  localStorage.setItem('activities', JSON.stringify(activities));
}

function addActivity (name: string, firstDate: string, secondDate: string, location: string): void {
  activities.push({name, firstDate, secondDate, location, id: generateId()});
  saveToLocalStorage();
  renderApp();
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

function deleteActivity(id: string): void {
  activities = activities.filter(activity => activity.id !== id);
  saveToLocalStorage();
  renderApp();
}

function editActivity(id: string, name: string, firstDate: string, secondDate: string, location: string): void {

  const activity = activities.find(activity => activity.id === id);

  if (activity) {
    activity.name = name;
    activity.firstDate = firstDate;
    activity.secondDate = secondDate;
    activity.location = location;
    saveToLocalStorage();
    renderApp();
  }
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

function App(): JSX.Element {

  loadFromLocalStorage();

  return (
    <div>
      <Header title="Semesterplaneraren"/>
      <ActivityForm onAddActivity={addActivity}/>
      <ActivityList 
      activities={activities}
      onDeleteActivity={deleteActivity}
      onEditActivity={editActivity}/>
    </div>
  );
}

export default App;
