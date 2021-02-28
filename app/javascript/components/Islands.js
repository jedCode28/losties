import React from 'react'

export default (props) => {
  const { islands } = props
  const renderIslands = () => {
    return islands.map(island => {
        return (
          <div>
            <h2>{island.id}: {island.name}</h2>
            <a href={`/islands/${island.id}`}>Show This Island</a>
          </div>
        )
    })
  }
  return (
    <>
    <h1>Islands:</h1>  
    {renderIslands()}
    </>
  )
}