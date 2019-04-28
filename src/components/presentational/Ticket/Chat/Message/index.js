import React from 'react';
import './index.scss';

export default props => {
    return (
        <div className={`message ${props.fromInquirer ? 'inquirer' : 'company'}`}>
            <div className="timestamp">{`${props.date} ${props.time}`}</div>
            <div className="text">{props.text}</div>
        </div>
    )
}