
import { Container } from "./styles";

import IncomeImg from "../../assets/IncomeIcon.svg";
import OutcomeImg from "../../assets/OutComeIcon.svg";
import DollarSing from "../../assets/DollarIcon.svg";

import {useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="income money" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "MZN",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="out come money" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "MZN",
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={DollarSing} alt="amount money" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "MZN",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
