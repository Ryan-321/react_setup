import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div className='app'>
    <div className='landing'>
      <h1>spotsit</h1>
      <input type='text' placeholder='search' />
    </div>
  </div>
)

render(<App />, document.getElementById('app'))
