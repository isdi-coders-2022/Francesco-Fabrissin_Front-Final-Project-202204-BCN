import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  children: JSX.Element;
};

const AntiController = ({ children }: Props) => {
  const { logged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/users/collections");
    }
  }, [navigate, logged]);

  if (!logged) {
    return children;
  } else {
    return null;
  }
};

export default AntiController;
