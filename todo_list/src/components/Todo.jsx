import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

const reducer=(state,action)=>{
    switch(action.type){
    case "ADD":
        return [...state,{...action.data,complete:false}]
    case "EDIT":
        return state.map(data=>
            data.id===action.data.id?{...data,title:action.data.title}:data);
    case "DELETE":
        return state.filter(data=>data.id!==action.id);
    default:
    return state
    }

}
const Todo = () => {
    const [input,setInput]=useState({})
    const [state,dispatcher]=useReducer(reducer,[])
  return (
    <div>
        <h3>{JSON.stringify(state)}</h3>
        <input type="text" onChange={(e)=>{setInput({...input,id: e.target.value})}}/>
        <input type="text" onChange={(e)=>{setInput({...input,title: e.target.value})}}/>
        <button onClick={()=>dispatcher({type:"ADD",data:input})}>ADD</button>

        <button onClick={()=>dispatcher({type:"EDIT",data:input})}>EDIT</button>

        <button onClick={()=>dispatcher({type:"DELETE",id:input.id})}>DELETE</button>
        

    </div>
  )
}

export default Todo