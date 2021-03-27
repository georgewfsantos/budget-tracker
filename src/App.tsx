import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export const App = () => {
  const [isNewTransactinModalOpen, setIsNewTransactinModalOpen] = useState(
    false
  );

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactinModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactinModalOpen(false);
  };
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactinModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
};
