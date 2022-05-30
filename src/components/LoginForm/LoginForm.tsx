import { useState } from "react";
import { Form } from "react-bootstrap";
import FormStyled from "./FormStyled";

const LoginForm = (): JSX.Element => {
  const blankData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankData);

  const changeFormData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <FormStyled>
      <img className="logo" src="/images/RecordSwapp-logo.png" alt="" />
      <Form className="login-form">
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
            onClick={() => {}}
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
