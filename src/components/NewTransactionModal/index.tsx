import Modal from "react-modal";
import closeButtonImage from "../../assets/close.svg";
import incomeImage from "../../assets/income.svg";
import expenditureImage from "../../assets/expenditure.svg";

import {
  Container,
  TransactionTypeContainer,
  TransactionTypeButton,
} from "./styles";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [transactionType, setTransactionType] = useState("");
  const [title, setTitle] = useState("");
  const [transactionValue, setTransactionValue] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      title,
      transactionType,
      transactionValue,
      category,
    };

    api.post("/transactions", data);
  };

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
        <img src={closeButtonImage} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button"
            onClick={() => setTransactionType("deposit")}
            isActive={transactionType === "deposit"}
            activeColor="green"
          >
            <img src={incomeImage} alt="Income" />
            <span>Entrada</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            onClick={() => setTransactionType("withdrawal")}
            isActive={transactionType === "withdrawal"}
            activeColor="red"
          >
            <img src={expenditureImage} alt="Outcome" />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <input
          type="number"
          placeholder="Valor"
          value={transactionValue}
          onChange={(event) => setTransactionValue(Number(event.target.value))}
        />

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
