import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Welcome} from './components/Welcome'
import {ToggleButton} from './components/ToggleButton'
import {UserForm} from './components/UserForm'
import {MyComp} from './components/MyComp'

function App() {
  return (
<div className='App'>
<header className='App-header'>
<Welcome name='Abhi'></Welcome>
<Welcome name='Sonu'></Welcome>
<ToggleButton/>
<UserForm></UserForm>
<MyComp></MyComp>
</header>
</div>
  )
}

export default App;
