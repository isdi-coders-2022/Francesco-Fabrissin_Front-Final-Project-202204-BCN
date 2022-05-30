import { Form } from "react-bootstrap";
import FormStyled from "./FormStyled";

const LoginForm = (): JSX.Element => {
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
          value=""
          onChange={() => {}}
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
          value=""
          onChange={() => {}}
          type="password"
        />
        <div className="containr text-center">
          <button
            disabled={false}
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
