import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
      <NewTransactionModal
        isOpen={isNewTransactinModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
};
