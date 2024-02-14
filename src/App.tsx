import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { DashBoard } from "./components/DashBoard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTransactionOpen, setIsNewModalTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionOpen(false);
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <DashBoard />
      <NewTransactionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
