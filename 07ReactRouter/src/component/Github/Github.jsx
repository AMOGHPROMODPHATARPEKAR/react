import React from 'react'
import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data,setData] = useState([])

    // useEffect(() => {
    //  fetch('https://api.github.com/users/AMOGHPROMODPHATARPEKAR')
    //  .then(response => response.json())
    //  .then(data=>{
    //     console.log(data)
    //     setData(data)
    //  })
    // }, [])
    

  return (
    
    <div className=' text-center m-4 p-4 bg-gray-500 text-white text-3xl'>Github Followers:{data.followers}
    <img className=' border-spacing-3' src={data.avatar_url} alt="User image" height={300} width={300} title={data.login} />
    </div>

  )
}

export default Github

export const githubLoader = async () =>{
    const response = await fetch('https://api.github.com/users/AMOGHPROMODPHATARPEKAR')
    console.log(response)
    return response.json()
}