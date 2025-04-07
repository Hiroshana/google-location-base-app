import React from 'react'
import LoginForm from '../components/LoginForm'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center m-4'>
        <h1 className='text-3xl my-3'>Hay, time to Sign In</h1>
        <LoginForm />
        <p className='my-3'>Don't you have an account?
          <Link className="mx-2 underline" href="register">Register</Link>
        </p>
      </div>

    </>
  )
}

export default page