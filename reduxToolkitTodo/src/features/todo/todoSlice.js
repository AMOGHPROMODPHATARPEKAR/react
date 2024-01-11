import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState ={
    todos:[]
}

export const  todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        editTodo:(state,action)=>{
            console.log(action)
             state.todos.map((todo)=> todo.id === action.payload.id? todo.text=action.payload.text : todo)
        },
        toggleCompleted:(state,action)=>{
            state.todos.map((todo)=> todo.id === action.payload? todo.completed=!todo.completed : todo)
        }
    }
})


export const {addTodo,deleteTodo,editTodo,toggleCompleted} = todoSlice.actions

export default todoSlice.reducer