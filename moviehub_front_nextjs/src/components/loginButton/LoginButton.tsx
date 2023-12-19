'use client'
import React from 'react'
import './loginButton.css'

import { useRouter } from 'next/navigation'

type Props = {}

const LoginButton = (props: Props) => {
  const router = useRouter()

    const handleLogin = () => {
      router.push('/home')
      

        console.log("login button pressed")
    }

  return (
    <div>
        <button className='button'  onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginButton