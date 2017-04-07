import { createStore } from 'redux'
import { addTodo } from './actions.js'
import todoApp from './reducer.js'

const store = createStore(todoApp)

console.log(store.getState())

let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('Learn about actions'))
