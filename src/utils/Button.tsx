import React from 'react'

export default function Button(props:buttonProps) {
  return (
    <div>
      <button className='btn btn-primary'>{props.children}</button>
      
    </div>
  )
}

interface buttonProps{
    children: React.ReactNode;
}