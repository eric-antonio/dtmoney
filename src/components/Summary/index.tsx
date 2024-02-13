import { useContext } from "react";
import { Container } from "./styles";

import IncomeImg from "../../assets/IncomeIcon.svg";
import OutcomeImg from "../../assets/OutComeIcon.svg";
import DollarSing from "../../assets/DollarIcon.svg";

import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const {transactions} = useContext(TransactionsContext);
  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="income money" />
        </header>
        <strong>17.400,00 MZN</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="out come money" />
        </header>
        <strong>-7.400,00 MZN</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={DollarSing} alt="amount money" />
        </header>
        <strong>137.400,00 MZN</strong>
      </div>
    </Container>
  );
}
