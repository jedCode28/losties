import React from 'react'

export default (props) => {
  const { islands } = props
  const renderIslands = () => {
    return islands.map(island => {
        return (
          <div>
            <h2>*{island.name}*</h2>
            <a href={`/islands/${island.id}`}>Show This Island</a>
            <a href={`/islands/${island.id}`} data-method="delete" style={{margin:'5px'}}>Destroy This Island</a>
          </div>
        )
    })
  }
  return (
    <>
    <h1>Islands:</h1>  
    {renderIslands()}
    <br/>
    <a href='/islands/new'>Add More?</a>
    </>
  )
}