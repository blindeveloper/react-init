import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, onClick, children}) => (
  <button onClick={onClick} disabled={active}>{children}</button>
)

PropTypes.Link= {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Link