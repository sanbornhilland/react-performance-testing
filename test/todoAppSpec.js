import expect from 'expect'
import todoApp from '../src/reducer'
import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../src/actions'

describe('TodoApp', () => {

  it('should return the default state', () => {
    const initialState = todoApp(undefined, {})

    expect(initialState).toEqual({
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: []
    })
  })

  it('should add a todo', () => {
    const nextState = todoApp({}, {type: ADD_TODO, text: 'foo'})

    expect(nextState).toInclude({
      todos: [{
        text: 'foo',
        completed: false
      }]
    })
  })

  it('should toggle a todo', () => {
    const nextState = todoApp({
      todos: [{
        test: 'foo',
        completed: false
      }]
    }, {
      type: TOGGLE_TODO,
      index: 0
    })

    expect(nextState).toInclude({
      todos: [{
        test: 'foo',
        completed: true
      }]
    })
  })

  it('should set the visibilityFilter', () => {
    const nextState = todoApp({
      visibilityFilter: VisibilityFilters.SHOW_ALL
    }, {
      type: SET_VISIBILITY_FILTER,
      filter: VisibilityFilters.SHOW_COMPLETED
    })

    expect(nextState).toInclude({
      visibilityFilter: VisibilityFilters.SHOW_COMPLETED
    })
  })
})
