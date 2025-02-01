
export default function InputContainer({inputVal,handleInput,handleClick}) {
  return (
    <div>
        <div className='input-container'>
        <input type="text" value={inputVal} onChange={handleInput}/>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
    
  )
}



