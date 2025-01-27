import { LocalStorageManager } from './LocalStorageManager';

let activities: { name: string; firstDate: string; secondDate: string; location: string; id: string }[] = LocalStorageManager.load();

// Pushes a new activity, filters out an existing based on ID or edits an activity
export const ActivityManager = {

  getActivities: () => activities,

  add: (name: string, firstDate: string, secondDate: string, location: string) => {

    activities.push({ name, firstDate, secondDate, location, id: generateId() });
    LocalStorageManager.save(activities);
  },

  delete: (id: string) => {

    activities = activities.filter((activity) => activity.id !== id);
    LocalStorageManager.save(activities);
  },

  edit: (id: string, name: string, firstDate: string, secondDate: string, location: string) => {

    const activity = activities.find((activity) => activity.id === id);
    
    if (activity) {
      activity.name = name;
      activity.firstDate = firstDate;
      activity.secondDate = secondDate;
      activity.location = location;
      LocalStorageManager.save(activities);
    }
  },
};

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}