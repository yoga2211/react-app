//first react hook

import React, { useState } from 'react'


const App=()=>{
  const [count,setCount]=useState(0);
  const [name,setName]=useState("Kumar");
  const [checked,setChecked]=useState(false);

  return(
    <div>
        <h1>React Hook Example</h1>
        <p>Count Value {count}</p>
        <p>Name : {name}</p>
        <p>Check box status {checked?"checked":"unchecked"}</p>

        <button onClick={()=>{
          setCount(count+1)
        }}
        >Increment</button>

        <button onClick={()=>{
          setName("Yogaprabu")
        }}
        >Change Name</button>

        <input type="checkbox" value={checked} onChange={()=>{
          setChecked((checked)=>!checked)
        }}/>
    </div>
  )

}

export default App;

