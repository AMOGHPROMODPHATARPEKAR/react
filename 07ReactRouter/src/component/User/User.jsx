import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userid } = useParams()
    return (
        <div className=' pt-5 text-center font-mono h-[20vh] text-4xl'>User:{userid}</div>
    )
}

export default User