import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"amogh",
    age:21
  }
  return (
    <>
      <h1 className='bg-green-100 rounded-xl mb-3' >tailwind test</h1>
<div className='flex-1 flex justify-start'>
      <Card  username="dell" myObj={myObj} />
      <Card username="mac" myObj={myObj}/>
    </div>
    </>
  )
}

export default App
