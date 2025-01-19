import React from 'react';

interface FormProps {
  onAddActivity: (name: string, firstDate: string, secondDate: string, location: string) => void;
  onEditActivity?: (id: string, name: string, firstDate: string, secondDate: string, location: string) => void;
  editingActivity?: { id: string, name: string, firstDate: string, secondDate: string, location: string };
}

function ActivityForm({ onAddActivity, onEditActivity, editingActivity }: FormProps): JSX.Element {

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const firstDate = (form.elements.namedItem('firstDate') as HTMLInputElement).value;
    const secondDate = (form.elements.namedItem('secondDate') as HTMLInputElement).value;
    const location = (form.elements.namedItem('location') as HTMLInputElement).value;

    if (onEditActivity && editingActivity) {
      onEditActivity(editingActivity.id, name, firstDate, secondDate, location);
    } else {
      onAddActivity(name, firstDate, secondDate, location);
    }

    form.reset();  // Reset the form after submit
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2> Namn: </h2>
        <input
          type="text"
          name="name"
          defaultValue={editingActivity ? editingActivity.name : ''}
        />
      </div>
      <div>
        <h2> Från: </h2>
        <input
          type="date"
          name="firstDate"
          defaultValue={editingActivity ? editingActivity.firstDate : ''}
        />
      </div>
      <div>
        <h2> Till: </h2>
        <input
          type="date"
          name="secondDate"
          defaultValue={editingActivity ? editingActivity.secondDate : ''}
        />
      </div>
      <div>
        <h2> Plats: </h2>
        <input
          type="text"
          name="location"
          defaultValue={editingActivity ? editingActivity.location : ''}
        />
      </div>
      <button type="submit">{editingActivity ? 'Redigera aktivitet' : 'Lägg till aktivitet'}</button>
    </form>
  );
}

export default ActivityForm;