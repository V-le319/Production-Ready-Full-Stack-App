import React from 'react'

const page = ({ params }: {params : { id : string}}) => { 
    const {id}= params; 

  return (
    
        <h1 className="text-3xl">User's Profile: {id}</h1>

        
  )
}

export default page