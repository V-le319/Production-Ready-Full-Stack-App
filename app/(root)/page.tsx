import React from 'react'
import Hello from '../components/hello';

const page = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
      <h1>Welcome to next.js</h1>
    {children}
    <Hello/>
    </div>
    
  )
}

export default page
