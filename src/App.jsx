import React, { useState } from 'react'
import "./App.css"
const App = () => {
//  let [count,setcount]=useState(0)
//  const addvalue=()=>{
//   setcount(count=>count+1)
//   setcount(count=>count+1)
//   setcount(count=>count+1)
 
  
//  }
//  const minusvalue=()=>{
//   if (count>0){
//   setcount(count-1)}
//   else setcount(0)
//  }
const [color,setColor]=useState("white")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
      <div className=' fixed justify-center bottom-12
      flex flex-wrap inset-x-0 px-2 '>
        <div className='flex flex-wrap shadow-lg bg-white p-3 rounded-md gap-2'>
          <button className='outline-none bg-red-500 rounded-lg px-3 ' onClick={()=>{setColor("red")}}/* style={{backgroundColor:"red"}} */>Red </button>
          <button className='outline-none bg-green-500 rounded-lg px-3' onClick={()=>{setColor("green")}} /* style={{backgroundColor:"red"}} */>Green </button>
          <button className='outline-none bg-yellow-500 rounded-lg px-3' onClick={()=>{setColor("yellow")}} /* style={{backgroundColor:"red"}} */>Yellow </button>
          <button className='outline-none bg-blue-500 rounded-lg px-3' onClick={()=>{setColor("blue")}} /* style={{backgroundColor:"red"}} */>Blue</button>
          <button className='outline-none bg-black rounded-lg px-3 text-white' onClick={()=>{setColor("black")}} /* style={{backgroundColor:"red"}} */>Black </button>
          <button className='outline-none bg-pink-500 rounded-lg px-3' onClick={()=>{setColor("pink")}} /* style={{backgroundColor:"red"}} */>Pink</button>
          <button className='outline-none bg-orange-500 rounded-lg px-3' onClick={()=>{setColor("orange")}} /* style={{backgroundColor:"red"}} */>Orange </button>
        </div>
      </div>
    
    </div>
  )
}

export default App