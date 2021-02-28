import React from 'react'

export default (props) => {
  const { tribes, island } = props
  const { name } = island 
  
  const renderIsland = () => {
    return tribes.map(tribe => {
    return (
      <div>
        <h3>{tribe.id}: {tribe.name}</h3>
         {/* /islands/:island_id/tribes/:id  */}
        <a href={`/islands/${island.id}/tribes/${tribe.id}`}>Show This Tribe</a>
      </div>
    )
    })
  }
  return (
    <div>
      <h1>{island.name} Island</h1>
      {renderIsland()}
    </div>
  )
}