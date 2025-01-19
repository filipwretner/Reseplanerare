import React from "react";
import ActivityItem from "./ActivityItem";

interface ActivityProps {
    name: string;
    firstDate: string;
    secondDate: string;
    location: string;
    id: string;
}

interface ListProps {
    activities: ActivityProps[];
    onDeleteActivity: (id: string) => void;
    onEditActivity: (id: string, name: string, firstDate: string, secondDate: string, location: string) => void;
}

function ActivityList({activities, onDeleteActivity, onEditActivity}: ListProps): JSX.Element {

    return (
        <div>
            {activities.map((activity) => (
                <ActivityItem
                key={activity.id}
                id={activity.id}
                name={activity.name}
                firstDate={activity.firstDate}
                secondDate={activity.secondDate}
                location={activity.location}
                onDelete={() => onDeleteActivity(activity.id)}
                onEdit={() => onEditActivity(activity.id, activity.name, activity.firstDate, activity.secondDate, activity.location)}
                />
            ))}
        </div>
    );
}

export default ActivityList;