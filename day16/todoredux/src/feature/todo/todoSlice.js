import {createSlice} from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"Hello Natasha",isUpdate:false}]
}
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:Math.random()*100,
                text:action.payload,
                isUpdate:false
            }
            state.todos.push(todo)

        },
        removeTodo:(state,action)=>{

        },
        changeUpdateStatus:(state,action)=>{

        },
        finalUpdate:(state,action)=>{

        }
    }
})
export const{addTodo,removeTodo, changeUpdateStatus, finalUpdate}=todoSlice.actions;

export default todoSlice.reducer