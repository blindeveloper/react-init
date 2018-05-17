import React from 'react'
import PropTypes from 'prop-types'
const App = props => (<div>
  <h2 className="component-style">Hello from App component {props.name}</h2>
</div>)

App.propTypes = {
  name: PropTypes.string.isRequired
}
export default App