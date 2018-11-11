import React from 'react'
import SwimmersList from '../organizms/swimmers/containers/swimmersList.container'
import AddNewSwimmer from '../organizms/swimmers/containers/addNewSwimmer.container'

const swimmers = () => (
  <div>
    <SwimmersList></SwimmersList>
    <AddNewSwimmer></AddNewSwimmer>
  </div>
)

export default swimmers