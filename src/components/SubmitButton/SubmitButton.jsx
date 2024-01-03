import React from 'react';
import "./SubmitButton.css";

export const SubmitButton = ({ value, type }) => {
    return (
        <>
            <div className="btn-container">
                <button type={type} className='submit-button'>{value}</button>
            </div>
        </>
    )
}
