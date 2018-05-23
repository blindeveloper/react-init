import React from 'react'
import resource from '../resource/api'

const TestPage = () => (<h2>Test page</h2>)


resource.getData((err, data)=>{
  if(err) throw new Error(err)
  console.log(data)
})


export default TestPage