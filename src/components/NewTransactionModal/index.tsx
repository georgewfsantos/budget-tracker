import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeButtonImage from "../../assets/close.svg";
import expenditureImage from "../../assets/expenditure.svg";
import incomeImage from "../../assets/income.svg";
import { useTransactions } from "../../hooks/useTransactions";
import {
  Container,
  TransactionTypeButton,
  TransactionTypeContainer,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const { createNewTransaction } = useTransactions();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    await createNewTransaction({
      title,
      type,
      category,
      amount,
    });

    setType("deposit");
    setTitle("");
    setAmount(0);
    setCategory("");
    onRequestClose();
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
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImage} alt="Income" />
            <span>Entrada</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            onClick={() => setType("withdrawal")}
            isActive={type === "withdrawal"}
            activeColor="red"
          >
            <img src={expenditureImage} alt="Outcome" />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
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
