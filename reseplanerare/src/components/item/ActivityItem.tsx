// ActivityItem.tsx - Component that renders a single activity
import React from "react";
import EditActivity from "./EditActivity";
import DeleteActivity from "./DeleteActivity";

// Propoerties for the item component
interface ItemProps {
    name: string;
    firstDate: string;
    secondDate: string;
    location: string;
    id: string;
    onDelete: () => void;
    onEdit: () => void;
}

// Functional component for the item component
function ActivityItem({ name, firstDate, secondDate, location, onDelete, onEdit }: ItemProps): JSX.Element {

    return (
        <div className="activity-item">
            <h3>{name}</h3>
            {firstDate === secondDate ? (
                <p>Datum: {firstDate}</p>
            ) : (
                <>
                    <p>Från: {firstDate}</p>
                    <p>Till: {secondDate}</p>
                </>
            )}
            <p>Plats: {location}</p>
            <EditActivity onEdit={onEdit} />
            <DeleteActivity onDelete={onDelete} />
        </div>
    );
}

export default ActivityItem;