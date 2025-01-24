// ActivityForm.tsx - Component that handles form input aswell as editing
import React, { useState } from 'react';

interface FormProps {
  onAddActivity: (name: string, firstDate: string, secondDate: string, location: string) => void;
  onEditActivity?: (id: string, name: string, firstDate: string, secondDate: string, location: string) => void;
  editingActivity?: { id: string; name: string; firstDate: string; secondDate: string; location: string } | null;
}

function ActivityForm({ onAddActivity, onEditActivity, editingActivity }: FormProps): JSX.Element {

  const [error, setError] = useState(''); // Using useState to handle error messages

  function handleSubmit(event: React.FormEvent): void {

    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const firstDate = (form.elements.namedItem('firstDate') as HTMLInputElement).value;
    const secondDate = (form.elements.namedItem('secondDate') as HTMLInputElement).value;
    const location = (form.elements.namedItem('location') as HTMLInputElement).value;

    if (!name || !firstDate || !secondDate || !location) {
      setError('Vänligen fyll i alla fält.');
      return;
    }

    setError('');

    if (onEditActivity && editingActivity) {
      onEditActivity(editingActivity.id, name, firstDate, secondDate, location);

    } else {
      onAddActivity(name, firstDate, secondDate, location);
    }
    
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <h2>Namn:</h2>
        <input type="text" name="name" defaultValue={editingActivity ? editingActivity.name : ''} className="form-input" />
      </div>
      <div className="form-group">
        <h2>Från:</h2>
        <input type="date" name="firstDate" defaultValue={editingActivity ? editingActivity.firstDate : ''} className="form-input" />
      </div>
      <div className="form-group">
        <h2>Till:</h2>
        <input type="date" name="secondDate" defaultValue={editingActivity ? editingActivity.secondDate : ''} className="form-input" />
      </div>
      <div className="form-group">
        <h2>Plats:</h2>
        <input type="text" name="location" defaultValue={editingActivity ? editingActivity.location : ''} className="form-input" />
      </div>
      <button type="submit" className="form-submit">{editingActivity ? 'Redigera aktivitet' : 'Lägg till aktivitet'}</button>
    </form>
  );
}

export default ActivityForm;