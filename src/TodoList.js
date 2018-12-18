import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const {todos} = this.props;
        const todolis = todos.map( (x) => <li key={x}>{x}</li>);
        
        return (
            <div>
                <ul>
                {todolis}
            </ul>
            </div>
        );
    }
}

export default TodoList;