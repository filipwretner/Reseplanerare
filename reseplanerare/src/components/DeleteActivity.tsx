import React from "react";

interface DeleteProps {
    onDelete: () => void;
}

function deleteButton ({onDelete}: DeleteProps): JSX.Element {
    return <button onClick={onDelete}>Radera</button>
}

export default deleteButton;