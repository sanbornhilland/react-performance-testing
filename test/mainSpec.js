import { helloWorld } from '../src/main'
const assert = require('assert')

describe(`Hello World`, () => {
  it(`should return 'Hello World'`, () => {
    assert.equal(helloWorld(), 'Hello World')
  })
})
