import React from 'react'
import banner from '../../assets/imagens/banner.png'
import styles from '../../paginas/paginaInicial/paginaInicial.module.scss'



const Banner = () => {
  return (
    <div className={styles.principal__imagem}>
        <h1>A galeria mais completa do espaço</h1>
        <img src={banner} alt="A imagem da Terra vista do espaço" />
    </div>
  )
}

export default Banner