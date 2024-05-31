import styled from "styled-components";
import { theme } from "styles/styles";

export const StyledInput = styled.input`
  padding: ${theme.padding.small};
  border: none;
  border-radius: ${theme.borderRadius};

  &:focus {
    outline: none;
    border: none;
  }
`;
