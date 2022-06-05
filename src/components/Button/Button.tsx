import ButtonStyled from "./ButtonStyled";
import { RiAddFill } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const Button = ({
  disabled,
  edit,
  add,
  className,
  text,
  action,
}: {
  disabled: boolean;
  edit: boolean;
  add: boolean;
  className: string;
  text: string;
  action: () => void;
}) => {
  return (
    <ButtonStyled disabled={disabled} className={className} onClick={action}>
      {add && <RiAddFill size={30} />}
      {edit && <FiEdit2 size={30} />}
      {text}
    </ButtonStyled>
  );
};

export default Button;
