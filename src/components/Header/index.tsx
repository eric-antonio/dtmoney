import logImg from "../../assets/Logo.svg";
import "./styles.ts";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logImg} alt="dt money" />
        <button>New Transaction</button>
      </Content>
    </Container>
  );
}
