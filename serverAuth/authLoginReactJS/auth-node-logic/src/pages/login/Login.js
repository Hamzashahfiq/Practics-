import React from 'react'
import NavigationTab from '../../commonComponents/NavigationTab'

export default function Login() {
  return (
    <div style={{padding:'30px'}}>
        <NavigationTab />
        <h2>Login</h2>
        <span>User Name:</span>
        <input type='text' />
        <span>Password:</span>
        <input type='text' />
          <button>Login</button>
    </div>
  )
}