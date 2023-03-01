import React from 'react'
import logo from './logo.png'
import search from './search.png'

const Cabecalho = () => {
  return (
    <header>
        <img src={logo} alt="Logo do Alura Space" />
        <div>
            <input type="text" placeholder='O que você procura'/>
            <img src={search} alt="Icone de Lupa" />
        </div>

    </header>
  )
}

export default Cabecalho