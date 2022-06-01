import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: JSX.Element;
};

const Controller = ({ children }: Props) => {
  const { logged } = useAppSelector((state) => state.user);

  if (logged) {
    return children;
  } else {
    return <Navigate to="/user/login" />;
  }
};

export default Controller;
