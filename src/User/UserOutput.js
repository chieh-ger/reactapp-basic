import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="output">
            <p><b>Username:</b> {props.username}</p>
            <p><b>Password:</b> {props.password}</p>
        </div>
    )
}

export default UserOutput;