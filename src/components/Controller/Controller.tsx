import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: JSX.Element;
};

const Controller = ({ children }: Props) => {
  const { logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/user/login");
    }
  }, [navigate, logged]);

  if (logged) {
    return children;
  } else {
    return null;
  }
};

export default Controller;
