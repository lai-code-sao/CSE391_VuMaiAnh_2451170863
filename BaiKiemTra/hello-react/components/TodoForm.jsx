import React from 'react'
function TodoForm(props){
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newTask ={
            id: Date.now(),
            taskName: e.target.querySelector('input').value,
            priority: e.target.querySelector('input[name="priority"]:checked').value,
            completed:"To Do",
        } 
        
        const regex=/^[a-zA-ZÀ-ỹ0-9\s]+$/;
        if(e.target.querySelector('input').value.trim() ===''){
            alert('Vui lòng nhập công việc!');
            return;
        }
        else if(e.target.querySelector('input').value.trim().length>100){
            alert('Tên task không quá 100 ký tự!');
            return;
        }
        else if (!regex.test(taskName)) {
            alert("Tên công việc chứa ký tự không hợp lệ");
            return;
        }
        else{
            props.addTask(newTask);
        }
        e.target.reset();

    }
    return(
        <form className="bg-white p-1" onSubmit={handleSubmit}>
            <div className="header d-flex justify-content-between align-items-center">
                <h2>Add Task</h2>
                <button className="btn" onClick={props.onClose}>
                    <i className="bi bi-x fs-1"></i>
                </button>
            </div>
            <div className="d-flex justify-content-start flex-column">
                <label htmlFor="taskName" className='d-flex justify-content-start'>Task</label>
                <input type="text" id="taskName" placeholder="Type your task here" className="w-auto"/>
                <label htmlFor="priority" className='d-flex justify-content-start'>Priority</label>
                <div id="priority" className='gap-2 d-flex justify-content-start'>
                    <input type="radio" id="high" className="btn-check" name="priority" value="High"/>
                    <label htmlFor="high" className="btn btn-outline-danger">High</label>
                    <input type="radio" id="medium" className="btn-check" name="priority" value="Medium"/>
                    <label htmlFor="medium" className="btn btn-outline-warning">Medium</label>
                    <input type="radio" id="low" className="btn-check" name="priority" value="Low" defaultChecked/>
                    <label htmlFor="low" className="btn btn-outline-success">Low</label>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-5">
                <button type="submit" className="btn btn-secondary shadow" >Add</button>
            </div>
        </form>
    );
}

export default TodoForm