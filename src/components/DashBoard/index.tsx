import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";
import "./styles";

export function DashBoard() {
  
  return (
    <Container>
      <Summary />
      <TransactionTable/>
    </Container>
  );
}
