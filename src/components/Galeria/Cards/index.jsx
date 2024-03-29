import React from 'react'
import Card from './Card'

const Cards = ({ itens, styles }) => {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map(foto => {
                return (
                    <Card
                        key={foto.id}
                        foto={foto}
                        styles={styles} 
                    />
                )
            })}
        </ul>
    )
}

export default Cards