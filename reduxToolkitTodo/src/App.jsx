import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'
import { useSelector } from 'react-redux'


function App() {
  
  const todos =  useSelector((state)=>state.todos)
  const [t,setT] = useState([])
  useEffect(() => {
    const ts = JSON.parse(localStorage.getItem("todos"));
    console.log(ts)
    if(ts && ts.length>0)
      setT(ts)
  }, [])
  
  console.log("T",t)
  // console.log(todos)
  useEffect(()=>{
    // setT(todos)
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 k">Redux todod</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <AddTodo />
          </div>
          
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full' >
                <Todos todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
