import InputContainer from "./Component/InputContainer"
import TodoContainer from"./Component/TodoContainer"
import './App.css'
import { useState } from "react"
function App() {

  const[input,setInput]=useState('')
  const[todos,setTodo]=useState([])  

  function handleInput(e){
    setInput(e.target.value);
  }
  
  function handleClick(){
    if(input!=""){
      setTodo(todos =>[...todos,input])//
      setInput('')
    }
  }

    function delTodo(todoIndex){//2   4!=1
      setTodo((preveTodos)=>preveTodos.filter((preveTodos,preveTodoIndex)=>{
        return preveTodoIndex !=todoIndex; 
      }))
  
  }
  return (
    <main>
      <h1>ToDo List React</h1>
      <InputContainer inputVal={input} handleInput={handleInput} handleClick={handleClick} />
      { 
        todos.map((todo,index)=><><TodoContainer delTodo={delTodo} todo={todo} index={index}/></>)
      } 
    </main>  
    
  )
}
export default App

