import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import Busca from "../../assets/Icons.svg";
import "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(function () {
    api.get("transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

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
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
