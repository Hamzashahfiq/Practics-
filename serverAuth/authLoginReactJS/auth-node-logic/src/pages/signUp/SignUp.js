import React from 'react'
import NavigationTab from '../../commonComponents/NavigationTab'
import { AddUser } from '../../store/AuthSlice'
import { useDispatch } from 'react-redux'

export default function SignUp() {
  const dispatch = useDispatch()

  const addUserHandler = () => {
    dispatch(AddUser())
  }
  return (
    <div style={{padding:'30px'}}>
        <NavigationTab />
         <h2>Sign Up</h2>
        <span>User Name:</span>
        <input type='text' />
        <span>Password:</span>
        <input type='text' />
          <button onClick={addUserHandler}>Sign Up</button>
    </div>
  )
}
