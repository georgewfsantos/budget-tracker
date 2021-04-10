import { Container } from "./styles";
import incomeImage from "../../assets/income.svg";
import expenditureImage from "../../assets/expenditure.svg";
import totalImage from "../../assets/total.svg";

const Summary: React.FC = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Income" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={expenditureImage} alt="Expediture" />
        </header>
        <strong> -R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Income" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
};

export default Summary;
