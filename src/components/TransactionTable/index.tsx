import { Container } from "./styles";

import { useTransactions } from "../../hooks/useTransactions";

import Busca from "../../assets/Icons.svg";

export function TransactionTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <form action="" method="get">
        <fieldset>
          <input
            type="text"
            name=""
            id=""
            placeholder="Busque uma transação "
          />
          <button>
            <img src={Busca} alt="busca por uma transação " />
            Busque
          </button>
        </fieldset>
      </form>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-PT", {
                  style: "currency",
                  currency: "MZN",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-PT").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
