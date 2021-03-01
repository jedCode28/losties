import React from 'react'

export default (props) => {
  return (
    <div>
      <h1>You want to just "add an island"?</h1>
      <h2>That is physically impossible...</h2>
      <h3>In the case of LOST, this would basically be The Freighter, do you want to involve The Freighter?</h3>
      <form action={"/islands"} method="post">
        <button type='submit'>Involve The Freighter</button>
      </form>
    </div>
  )


}