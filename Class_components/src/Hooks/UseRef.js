import React,{useRef} from 'react'

function UseRef() {

    let inputRef = useRef();

    const clickHandler =()=>{
        console.log(inputRef.current.value);

        let color = inputRef.current.value;

        inputRef.current.style.backgroundColor = color;
    }
  return (
    <>
        <h2> useRef Hook </h2>

        <div>
            <input type="text" ref={inputRef} placeholder='Enter color name Here' /><br /><br />
            <button onClick={clickHandler}>Submit</button>
        </div>
    </>
  )
}

export default UseRef