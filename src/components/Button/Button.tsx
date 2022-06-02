import ButtonStyled from "./ButtonStyled";

const Button = ({ text, action }: { text: string; action: () => void }) => {
  return <ButtonStyled onClick={action}>{text}</ButtonStyled>;
};

export default Button;
