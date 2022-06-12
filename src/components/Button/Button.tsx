import ButtonStyled from "./ButtonStyled";
import { RiAddFill } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

type ButtonType = "button" | "submit" | "reset";

const Button = ({
  type,
  disabled,
  edit,
  add,
  className,
  text,
  action,
}: {
  type: ButtonType;
  disabled?: boolean;
  edit?: boolean;
  add?: boolean;
  className: string;
  text: string;
  action?: () => void;
}) => {
  return (
    <ButtonStyled
      type={type}
      disabled={disabled}
      className={className}
      onClick={action}
    >
      {add && <RiAddFill size={30} />}
      {edit && <FiEdit2 size={20} />}
      {text}
    </ButtonStyled>
  );
};

export default Button;
