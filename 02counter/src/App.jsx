import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(0)

  // let counter =5

  const addValue = () =>{
  //  console.log("clicked",counter)
   if(counter<20)
   setCounter(counter+1)
  }

  const delvalue = () =>{
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue} >Add value </button>
      <br />
      <br />
      <button onClick={delvalue}>remove value</button>
      <p>Footer:  {counter}</p>
    </>
  )
}

export default App
