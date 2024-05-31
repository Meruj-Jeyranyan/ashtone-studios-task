import { StyledButton } from "./Button.styles";

const Button = ({
  children,
  variant = "default",
  size = "medium",
  ...props
}) => {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
