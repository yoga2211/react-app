import React, { useEffect, useState } from 'react'

function App(){
    const[name,setName]=useState("Yoga");
    const[admin,setAdmin]=useState(false);

    //case 1: when you dont pass [] on the useEffect it will execute n number of times
    //case 2: 


    useEffect(()=>{
        document.title=`This is ${name} Page`;
        console.log(`This is ${name} Page`);
    },[name])

    useEffect(()=>{
        console.log(`The user is ${admin?"Admin":"Not Admin"} `);
    },[admin])

    return(
        <div>
            <p>Hello Mr. {name}</p>
            <p>You are : {admin?"Admin":"Not Admin"}</p>
            <button onClick={()=>{
                setName("Yogaprabu")
            }}            
            >Get Fullname</button>

            <button onClick={()=>setAdmin(true)}>
                Admin
            </button>
        </div>
    )
}

export default App;