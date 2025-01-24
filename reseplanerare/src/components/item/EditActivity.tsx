// Component that renders the edit button
import React from "react";

interface EditProps {
    onEdit: () => void;
}

function editButton ({onEdit}: EditProps): JSX.Element {
    return <button onClick={onEdit}>Redigera</button>
}

export default editButton;