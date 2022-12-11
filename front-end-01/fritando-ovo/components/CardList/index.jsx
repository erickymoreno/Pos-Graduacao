import styles from './CardList.module.css'
import Card from '../Card'

export default function CardList(){
  return (
  <div className={styles.card_list}>
    <Card 
      titulo="Arroz com ovo e pepino"
      preparo="25 minutos"
      porcoes="Serve 2 pessoas"
      imagem="/images/ovo-pepino.png"
      />
      <Card 
      titulo="Ovo com bacon"
      preparo="5 minutos"
      porcoes="Serve 1 pessoas"
      imagem="/images/ovo-bacon.png"
      />
  </div>    
  );
}