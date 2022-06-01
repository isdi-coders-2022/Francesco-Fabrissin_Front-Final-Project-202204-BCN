import { useParams } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const AccessFormPage = () => {
  const { register } = useParams();

  return <>{register ? <RegisterForm /> : <LoginForm />}</>;
};

export default AccessFormPage;
