import React, { useReducer } from 'react'

function App() {
    //reducer is similar to state but it takes a function as first argument
    //and second argument is initial value
    const [number,setNumber]=useReducer((number,newNum)=>number+newNum,0);
    return(
        <h1 onClick={()=>{setNumber(20)}}>{number}</h1>
    )
}

export default App
