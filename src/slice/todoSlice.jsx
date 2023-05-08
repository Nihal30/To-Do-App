const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    todos:[],
}

const todoSlice =createSlice({
    name:"todoslice",
    initialState:initialState,
    reducers:{
        addTodos:(state, action) =>{
            state.todos.push(action.payload);
        },
        removeTodo:(state,action) =>{
            const newItem = state.todos.filter((item , index)=>{
                return index !== action.payload;

            })
            state.todos=newItem;

        }
    },
});

export const {addTodos , removeTodo} = todoSlice.actions;
export default todoSlice.reducer;