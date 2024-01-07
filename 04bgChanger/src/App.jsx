import { useState } from 'react'


function App() {

  const [color,setColor] = useState('red')
  return (
    <>
      <div className='w-full h-screen duration-100'
      style={{backgroundColor:color}}
      >
        <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
      <button className=' outline-none px-4 bg-red-600 py-1 rounded-xl text-white shadow-lg'
      onClick={()=>setColor("red")}
      >Red</button>
      <button className=' outline-none px-4 bg-blue-600 py-1 rounded-xl text-white shadow-lg'
      onClick={()=>setColor("blue")}
      >Blue</button>
      <button className=' outline-none px-4 bg-black py-1 rounded-xl text-white shadow-lg'
      onClick={()=>setColor("black")}
      >Black</button>
      <button className=' outline-none px-4 bg-orange-600 py-1 rounded-xl text-white shadow-lg'
      onClick={()=>setColor("orange")}
      >Orange</button>
      <button className=' outline-none px-4 bg-white-600 py-1 rounded-xl text-black border-black shadow-lg'
      onClick={()=>setColor("white")}
      >White</button>
      <button className=' outline-none px-4 bg-green-600 py-1 rounded-xl text-white shadow-lg'
      onClick={()=>setColor("green")}
      >Green</button>
      <button className=' outline-none px-4 bg-cyan-600 py-1 rounded-xl text-white shadow-lg'
      onClick={()=>setColor("cyan")}
      >Cyan</button>
      <button className=' outline-none px-4 bg-yellow-400 py-1 rounded-xl text-white shadow-lg'
      onClick={()=>setColor("yellow")}
      >Yellow</button>
      
      
       </div>
        </div>
      </div>

    </>
  )
}

export default App
