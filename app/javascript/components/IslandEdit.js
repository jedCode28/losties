import React from 'react'

export default (props) => {
  const { name, id } = props.island
  return (
    <>
      <h1>Edit?! You don't even know!</h1>
      <form action={`/islands/${id}`} method='post'>
        <input type="hidden" name="_method" value="patch" />
        <input type="text" defaultValue={name} name="island[name]"/>
        <button type='submit'>add</button>
      </form>
    </>
  )
}