export const LocalStorageManager = {

    load: (): any[] => {

      const storedActivities = localStorage.getItem('activities');
      return storedActivities ? JSON.parse(storedActivities) : [];
    },
    
    save: (activities: any[]): void => {
      localStorage.setItem('activities', JSON.stringify(activities));
    },
  };