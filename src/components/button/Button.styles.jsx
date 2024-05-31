import styled, { css } from "styled-components";

export const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $size }) =>
    $size === "small"
      ? "0.25em 0.5em"
      : $size === "large"
        ? "0.75em 1.5em"
        : "0.5em 1em"};
  font-size: ${({ $size }) =>
    $size === "small" ? "0.75rem" : $size === "large" ? "1.25rem" : "1rem"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return "#007bff";
      case "secondary":
        return "#6c757d";
      case "outline":
        return "#fff";
      case "danger":
        return "#dc3545";
      default:
        return "#fff";
    }
  }};
  color: ${({ $variant }) => {
    switch ($variant) {
      case "primary":
      case "secondary":
      case "danger":
        return "#fff";
      case "outline":
        return "#007bff";
      default:
        return "#000";
    }
  }};
  border: ${({ $variant }) =>
    $variant === "outline" ? "1px solid #007bff" : "none"};

  &:hover {
    background-color: ${({ $variant }) => {
      switch ($variant) {
        case "primary":
          return "#0056b3";
        case "secondary":
          return "#5a6268";
        case "outline":
          return "#e2e6ea";
        case "danger":
          return "#c82333";
        default:
          return "#e2e6ea";
      }
    }};
    border-color: ${({ $variant }) =>
      $variant === "outline" ? "#0056b3" : "none"};
  }

  &:disabled {
    background-color: #d6d8db;
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;
