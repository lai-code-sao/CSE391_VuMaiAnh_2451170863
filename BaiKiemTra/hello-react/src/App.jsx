import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    fetch("/data.json")
    .then(res => res.json())
    .then(data => setTodos(data))
  },[]);

  const [showForm, setShowForm]=useState(false);
  const addTask=(newTask)=>{
    setTodos([...todos, newTask]);
  }

  const [message, setMessage] = useState("");
  const deleteTask= (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setMessage("Đã xóa công việc thành công!");

        setTimeout(() => {
            setMessage("");
        }, 3000);
  }

  return (
    <>
      {
        showForm && (
          <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              background: "rgba(0,0,0,0.5)",
              zIndex: 1000,
            }}
          >
            <div className="bg-white p-4 rounded shadow w-75 h-50">
              <TodoForm onClose={() => setShowForm(false)} addTask={addTask}/>
            </div>
          </div>
        )
      }
      {message && (
        <div
          className="alert alert-success position-fixed top-0 end-0 m-3"
          style={{ zIndex: 2000 }}
        >
          {message}
        </div>
      )}
      <div className='bg-light'>
          <header className="d-flex justify-content-between align-items-center p-4 mb-2">
              <h1>Task List</h1>
              <button className="btn btn-primary rounded-3 shadow" 
              style={{
                backgroundColor:"purple",
              }}
              onClick={() => setShowForm(true)}>
                <i className="bi-plus"></i>
                Add Task
              </button>
          </header>
          <main className="container p-1">
              <TodoList todos={todos} deleteTask={deleteTask}/>
          </main>
      </div>
    </>
  )
}

export default App
