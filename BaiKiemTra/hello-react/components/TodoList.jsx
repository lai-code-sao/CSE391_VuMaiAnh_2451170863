import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props){
    
    return(
        <ul className="list-group gap-2 p-3">
            {props.todos.map(todo => (
                <TodoItem key={todo.id} todos={todo} deleteTask={props.deleteTask}/>
            ))}
        </ul>
    );
}

export default TodoList