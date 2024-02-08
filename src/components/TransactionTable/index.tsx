import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import Busca from "../../assets/Icons.svg";
import "./styles";

export function TransactionTable() {
  useEffect(function () {
    api.get("transactions").then((response) => console.log(response.data));
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 120.000,00</td>
            <td>Desenvolvimento</td>
            <td>07/02/24</td>
          </tr>
          <tr>
            <td>Hambúrguer</td>
            <td className="withdraw">- R$ 1.200,00</td>
            <td>Alimentação</td>
            <td>07/02/24</td>
          </tr>

          <tr>
            <td>Aluguel do apartamento</td>
            <td className="withdraw">- R$ 1.200,00</td>
            <td>Casa</td>
            <td>07/02/24</td>
          </tr>

          <tr>
            <td>Computador</td>
            <td className="deposit">R$ 550.000,00</td>
            <td>Venda</td>
            <td>07/02/24</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
