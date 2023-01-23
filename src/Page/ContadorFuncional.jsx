import React, { useState } from 'react'

export default function ContadorFuncional() {

  const [theme, setTheme] = useState(true);
  const [count, setCount] = useState(0);
  const [clicksCount, setclicksCount] = useState(0);

  const accountanter = () => {
    setCount(count + 1);
    setclicksCount(clicksCount + 1)
  }

  const accountanter5 = () => {
    setCount(count + 5)
    setclicksCount(clicksCount + 1)
  }

  const cleanCount = () => {
    setCount(0)
    setclicksCount(0)
  }
  
  return (
    <div className={ theme ? 'App_Dark block' : 'App_Light block' }>
      <div className={ theme ? 'App_Dark sun' : 'App_Light sun' }>
        <button
        className={ theme ? 'App_Dark button' : 'App_Light button' }
        onClick={ () => setTheme(!theme) }
        >
            <span className={ !theme ? "material-symbols-outlined lamp-dark" :  "material-symbols-outlined lamp-dark lamp-light"}>
             { !theme ? 'brightness_2' : 'Sunny' }
            </span>
        </button>
      </div>
    <div className={ theme ? 'App_Dark' : 'App_Light' }>
      <div>
      <h1>Contador Funcional</h1>
        <h2>{ count }</h2>
            <button
        className={ theme ? 'App_Dark button button-dark' : 'App_Light button button-light' }
        onClick={() => accountanter() }>
            Incrementa 1
            </button>
            <button
        className={ theme ? 'App_Dark button button-dark' : 'App_Light button button-light' }
        onClick={() => accountanter5() }>
            Incrementa 5
            </button>
      </div>
    </div> 
    <div>
      <h3>Número de clicks: {clicksCount} </h3>
      <button 
            className='button is-primary is-danger is-light clean'
            onClick={() => cleanCount()}
            >
            Limpar
      </button> 
    </div>
    </div>
  )
}
