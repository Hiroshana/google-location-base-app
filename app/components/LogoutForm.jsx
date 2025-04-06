import React from 'react'
import { doLogout } from '../actions/login.action'

const LogoutForm = () => {
  return (
    <form action={doLogout}>
      <button className='bg-blue-400 my-2 text-white p-1 rounded' type="submit">Logout</button>

    </form>
  )
}

export default LogoutForm