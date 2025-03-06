import React,{useContext,useState} from 'react'
import { useUser } from '../context/UserContext';
function UpdateCustomer() {
  const { user } = useUser();
  console.log(user)
  return (
    <>
    <form >
          
          
         
        </form> 
        </>
  )
}

export default UpdateCustomer