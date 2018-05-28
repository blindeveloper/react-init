import React from 'react'
import Input from '../../atoms/input/index.jsx'
import Button from '../../atoms/button/index.jsx'
import PropTypes from 'prop-types'

const OneLineForm = ({btnType, refType}) => {
  return (
    <div>
      <Input type='text' placeholder='type text here' refType={refType}/>
      <Button active={true} onClick={()=>{}} btnType={btnType}>+</Button>
    </div>
  )
}

OneLineForm.propTypes = {
  btnType: PropTypes.string.isRequired,
  refType: PropTypes.func.isRequired
}

export default OneLineForm