import React from 'react'
import Banner from 'components/Banner';
import Cabecalho from 'components/Cabecalho';
import { Galeria } from 'components/Galeria';
import Menu from 'components/Menu';
import Populares from 'components/Populares';
import Rodape from 'components/Rodape';

import styles from './paginaInicial.module.scss'

const PaginaInicial = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
          <Rodape />
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
    </>
  );
}

export default PaginaInicial