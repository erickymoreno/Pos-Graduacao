import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div><img src="./images/logo.svg" alt="Imagem de uma panela com ovo"/></div>
      <div>
        <h1>Fritando Ovo</h1>
        <div>Receitas fáceis</div>
      </div>
    </header>
  );
}