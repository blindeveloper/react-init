import React from 'react'
import resource from '../resource/api'

const TestPage = () => (<h2>Test page</h2>)

resource.getData().then(data => {
  console.log('data:',data)
}, err => { throw new Error(err) })

export default TestPage