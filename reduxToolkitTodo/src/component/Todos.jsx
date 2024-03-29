import React,{useState} from 'react'
import { deleteTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'
import { editTodo ,toggleCompleted} from '../features/todo/todoSlice'


const Todos = ({todo}) => {
    // const todos =  useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [text,setText] = useState(todo.text)
    

    const toggle = () =>{
        dispatch(toggleCompleted(todo.id))
    }

    return (
        <>
    <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#b684db]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggle}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        dispatch(editTodo({"id":todo.id,"text":text}));
                        setIsTodoEditable(false)
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    </>
  )
}

export default Todos