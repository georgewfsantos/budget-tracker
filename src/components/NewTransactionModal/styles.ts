import styled from "styled-components";
import { darken, transparentize } from "polished";

interface TransactionTypeButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const activeButtonColors = {
  green: "#33CC95",
  red: "#e52e4d",
};

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  transition: border-color 0.2s;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, activeButtonColors[props.activeColor])
      : "transparent"};

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    /* display: inline-block; */
    margin: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
