import { StyledInput } from "./Input.styles";

const Input = ({ visible = true, ...props }) => {
  return visible ? <StyledInput {...props} /> : null;
};

export default Input;
