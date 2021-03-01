import React from 'react'

export default (props) => {
  const { tribes } = props
  const renderTribes = () => {
   return tribes.map(tribe => {
     return (
       <div>
      <h1>{tribe.name}</h1>
      </div>
     )
   })
  }
  return (
    <>
    <h1>Tribe Members:</h1>
    {renderTribes()}
    </>
  )

}