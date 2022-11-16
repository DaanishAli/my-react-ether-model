import './App.css';
import React from 'react';
import { AppContext } from './utils'

const App = () => {

  const { account, connect, disconnect } = React.useContext(AppContext);
  console.log(account);
  return (
    <div className='App'>
      {!account ? <button onClick={() => connect()}>Connect</button> : <button onClick={() => disconnect()}> {account.slice(0, 4) + "..." + account.slice(-4)}</button>}

    </div>
  )
}

export default App