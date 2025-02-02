import React from 'react'
export default function TodoContainer({todo,delTodo,index}) {
  return (
    <>

<div className='container'>

<div className='todo'>
  
    <p>{todo}</p>
    <div className='actions'>
    <input type="checkbox" />
    <button onClick={()=>delTodo(index)}>Delete</button>
    </div>
  </div>
</div>
    </>
  )
}

