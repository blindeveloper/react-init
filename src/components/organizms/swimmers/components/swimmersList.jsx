import React from 'react'

const List = ({swimmersListContainer, removeSwimmer}) => (
  <ul>
    {swimmersListContainer.map((swimmer, i) => {
      return <li key={i} onClick={() => removeSwimmer(swimmer.id)}>{swimmer.name}</li>
    })}
  </ul>
)

export default List