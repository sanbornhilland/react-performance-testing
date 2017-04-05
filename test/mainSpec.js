import expect from 'expect'
import { helloWorld } from '../src/main'

describe(`Hello World`, () => {
  it(`should return 'Hello World'`, () => {
    expect(helloWorld()).toEqual('Hello World')
  })
})
