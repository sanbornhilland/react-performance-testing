import expect from 'expect'
import { addTodo, toggleTodo, setVisibilityFilter } from '../src/actions.js'

describe('Actions', () => {

  it('should add a todo', () => {
    expect(addTodo('foo')).toEqual({
      type: 'ADD_TODO',
      text: 'foo'
    })
  })

  it('should toggle todos', () => {
    expect(toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      index: 1
    })
  })

  it('should set visibility filters', () => {
    expect(setVisibilityFilter('bar')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'bar'
    })
  })
})
