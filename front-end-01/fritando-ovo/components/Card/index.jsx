import styles from './Card.module.css'
export default function Card({titulo, preparo, porcoes, imagem}) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt="Foto de uma prato de comida com ovo, arroz e pepino"/>
      <h2 className={styles.card_title}>{titulo}</h2>
      <div>
        <div>
          <img className={styles.card_image} src="/images/time1.svg" alt="Foto de um relogio"/>
          <span className={styles.card_info}>{preparo}</span>
        </div>
        <div>
          <img className={styles.card_image} src="/images/food1.svg" alt="Foto de tijela com comida"/>
          <span className={styles.card_info}>{porcoes}</span>
        </div>
      </div>
    </div>
  );
}