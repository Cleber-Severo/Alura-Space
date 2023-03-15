import React from 'react'
import Banner from '../../components/Banner';
import Cabecalho from '../../components/Cabecalho';
import { Galeria } from '../../components/Galeria';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import styles from './paginaInicial.module.scss'

const PaginaInicial = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
          <Rodape/>
        </section>
      </main>
      <div>
        <Galeria />
      </div>
    </>
  );
}

export default PaginaInicial