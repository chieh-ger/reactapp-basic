import React from 'react';

const UserInput = (props) => {
    const style = {
        textTransform: "uppercase"
    }
    return (
        <div className="input">
            <label style={style} htmlFor="usernameInput">Type here to change first username</label><br/>
            <input name="usernameInput" type="text" onChange={props.changeUsername} value={props.username}/>
        </div>
    )
}

export default UserInput;