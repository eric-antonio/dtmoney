import { Container } from "./styles";
import IncomeImg from "../../assets/IncomeIcon.svg";
import OutcomeImg from "../../assets/OutComeIcon.svg";
import DollarSing from "../../assets/DollarIcon.svg";

import "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income's</p>
          <img src={IncomeImg} alt="income money" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <p>Outcome's</p>
          <img src={OutcomeImg} alt="out come money" />
        </header>
        <strong>R$ -7.400,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={DollarSing} alt="amount money" />
        </header>
        <strong>R$ 137.400,00</strong>
      </div>
    </Container>
  );
}
