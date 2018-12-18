import React, { Component } from 'react';

class AddBar extends Component {
    render() {
        const {currentText, setText, addTodo} = this.props;
        return (
            <div>
                <input type="text" placeholder="Text" value={currentText}
                       onChange = {setText}></input>
                       
                <button onClick = {addTodo} >Add Task</button>
            </div>
        );
    }
}

export default AddBar;