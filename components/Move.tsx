"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Move = () => {
    const router = useRouter()
  return (

    <div>
        <button className='rounded text-white bg-blue-700' onClick={() => router.push("/Services")}>click to move</button>
    </div>
  )
}

export default Move