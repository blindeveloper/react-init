import React from 'react'
import App from './app.js'
import renderer from 'react-test-renderer'

test('App test', () => {
  const component = renderer.create(<App/>)
  let AppInstance = component.getInstance()
  expect(AppInstance.sum(1,2)).toBe(3)
})