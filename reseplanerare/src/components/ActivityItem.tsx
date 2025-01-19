import React from "react";
import EditActivity from "./EditActivity";
import DeleteActivity from "./DeleteActivity";

interface ItemProps {
    name: string;
    firstDate: string;
    secondDate: string;
    location: string;
    id: string;
    onDelete: () => void;
    onEdit: () => void;
}

function ActivityItem({ id, name, firstDate, secondDate, location, onDelete, onEdit }: ItemProps): JSX.Element {

    return (
        <div>
            <h3>{name}</h3>
            if (firstDate === secondDate) {
                <p>Datum: {firstDate}</p>
            } else {
                <>
                    <p>Från: {firstDate}</p>
                    <p>Till: {secondDate}</p>
                </>
            }
            <p>Plats: {location}</p>
            <EditActivity onEdit={onEdit} />
            <DeleteActivity onDelete={onDelete} />
        </div>
    );
}

export default ActivityItem;