import { useState } from "react";
import { Form } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { loginThunk } from "../../redux/thunks/userThunks";

import FormStyled from "./FormStyled";

const LoginForm = (): JSX.Element => {
  const blankData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankData);
  const dispatch = useAppDispatch();

  const changeFormData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitLogin = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
  };

  return (
    <FormStyled>
      <img className="logo" src="/images/RecordSwapp-logo.png" alt="" />
      <Form onSubmit={submitLogin} className="login-form">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          className="form-control"
          autoComplete="off"
          placeholder="Type your username"
          id="username"
          value={formData.username}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          autoComplete="off"
          placeholder="******"
          id="password"
          value={formData.password}
          onChange={changeFormData}
          type="password"
        />
        <div className="containr text-center">
          <button
            disabled={formData.username === "" || formData.password === ""}
            className="btn button-main"
            type="submit"
          >
            LOGIN
          </button>
        </div>
      </Form>
      <span>New on RecordSwapp?</span>
      <button className="button-secondary" onClick={() => {}}>
        Create an account
      </button>
    </FormStyled>
  );
};

export default LoginForm;
