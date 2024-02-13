import Modal from "react-modal";

import { api } from "../../services/api";
import { FormEvent, useState, useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import CloseImg from "../../assets/closeIcon.svg";
import IncomeImg from "../../assets/IncomeIcon.svg";
import OutComeImg from "../../assets/OutComeIcon.svg";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const { createTransaction } = useContext(TransactionsContext);

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    createTransaction({
      title,
      amount,
      category,
      type,
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="fechar o modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Informações </h2>

        <input
          placeholder="Descrição"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder="Preço"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activecolor="green"
          >
            <img src={IncomeImg} alt="Entrada de valores" />
            <span>Entra</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activecolor="red"
          >
            <img src={OutComeImg} alt="Saida de valores" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
