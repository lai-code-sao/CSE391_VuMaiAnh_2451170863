import React from "react";
function TodoItem(props){
    const deleteTask = () => {
        props.deleteTask(props.todos.id);
    }
    return(
        <li className="bg-white d-flex justify-content-between align-items-center p-3 rounded-3 shadow rounded-2">
            <div className="taskName col-4 d-flex flex-column">
                <p className="text-muted mb-1">Task</p>
                <h5>{props.todos.taskName}</h5>
            </div>
            <div className="priority col-2">
                <p className="text-muted mb-1">Priority</p>
                {props.todos.priority === 'Low' ? (
                <h5 className="fw-bold text-success">{props.todos.priority}</h5>
                ) : props.todos.priority === 'Medium'?(
                <h5 className="fw-bold text-warning">{props.todos.priority}</h5>
                ) : (
                <h5 className="fw-bold text-danger">{props.todos.priority}</h5>
                )}
            </div>
            <div className="completed btn btn-light text-secondary fw-bold col-2">
                {props.todos.completed}
            </div>
            <div className="rounded-circle col-2"></div>                
            <div className="d-flex justify-content-between col-2">
                <button className="btn" >
                    <i className="bi bi-pencil-square fs-3"></i>
                </button>
                <button className="btn" onClick={deleteTask}>
                    <i className="bi bi-trash text-danger fs-3"></i>
                </button>
            </div>
        </li>
    );
}

export default TodoItem