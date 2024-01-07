import { useState ,useCallback,useEffect,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber] = useState(false)
  const [character,setCharacter] = useState(false)
  const [password,setPassword] = useState("")
 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(character) str += "~!@#$%^&*()+_-"
    
    for(let i=1;i<=length;i++)
    {
      const char = Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
    }

    setPassword(pass)

  },[length,number,character,setPassword])


  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    toast.success('Password copied to clipboard!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000, // Auto close after 2 seconds
    });
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-center px-4 py-3 my-8  text-orange-600 bg-gray-600'>
        <h1 className=' text-white text-center my-3'>Password generator </h1>
      <div className=' flex shadow-lg rounded-lg overflow-hidden mb-4'>
    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef}
    
    />
    <button className=' bg-blue-600 outline-none text-white px-3 py-0.5 shrink-0 hover:bg-green-400'
    onClick={copyPassword}
    >copy</button>
      </div >
      <ToastContainer />
    <div className='flex gap-x-2 text-sm'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={50}
      value={length}
      className=' cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
       />
       <label >Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={number}
      id='numberInput'
      onClick={()=>{setNumber((prev) =>!prev)}}
       />
       <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={character}
      id='charInput'
      
      onClick={()=>{setCharacter((prev) =>!prev)}}
       />
       <label htmlFor="charInput">Character</label>
    </div>

    </div>

      </div>
    </>
  )
}

export default App
