import React from 'react'

// export default (props) => {
//   const { members } = props
//   const renderMembers = () => {
//     return members.map(member => {
//       return(
//         <div>
//           <h4>{member.name}</h4>
//         </div>
//       )
//     })
//   }
//   return (
//     <>
//     <h1>Tribe Members:</h1>
//     {renderMembers()}
//     </>
//   )
// }

export default (props) => {
  const { members } = props
  return(
  <div>
    <h1>Tribe Members:</h1>
    <h4>Jack</h4>
    <h4>Kate</h4>
    <h4>Sawyer</h4>
  </div>
  )
}