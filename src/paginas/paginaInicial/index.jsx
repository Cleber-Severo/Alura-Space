import React from 'react'
import Banner from '../../components/Banner';
import Cabecalho from '../../components/Cabecalho';
import Menu from '../../components/Menu';
import styles from './paginaInicial.module.scss'

const PaginaInicial = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>

      </main>
    </>
  );
}

export default PaginaInicial