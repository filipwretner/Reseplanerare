import React from "react";

interface InputProps {
    type: string;
    name: string;
    defaultValue?: string;
    className?: string;
    label: string;
}

function FormInput ({ type, name, defaultValue, className, label }: InputProps) {

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} defaultValue={defaultValue} className={className} />
        </div>
    );
}

export default FormInput;