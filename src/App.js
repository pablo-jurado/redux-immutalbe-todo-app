import React from 'react'
import logo from './logo.svg'
import { TodoList } from './components'
import { List, Map } from 'immutable'
import reducer from './reducer'
import { createStore } from 'redux'
import './App.css'

const store = createStore(reducer)

const dummyTodos = [
  { id: 0, isDone: true, text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
]

function Header () {
  return (
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h2>Redux and Immutalbe Todo App</h2>
    </div>
  )
}

function App () {
  return (
    <div className='App'>
      {Header()}
      {<TodoList todos={store.getState()} />}
    </div>
  )
}

export default App
