import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const AccessFormPageStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AccessFormPage = (): JSX.Element => {
  const { register } = useParams();

  return (
    <AccessFormPageStyle>
      {register ? <RegisterForm /> : <LoginForm />}
    </AccessFormPageStyle>
  );
};

export default AccessFormPage;
