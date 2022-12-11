import CardList from "../components/CardList";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Header/>
      <CardList/>
      <Button danger="true">Deletar</Button>
      <Button warning="true">Alterar</Button>
      <Button sucess="true">Salvar</Button>
    </div>
  );
}
