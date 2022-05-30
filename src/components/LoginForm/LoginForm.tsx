import { Form } from "react-bootstrap";

const LoginForm = (): JSX.Element => {
  return (
    <div>
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
        <button
          disabled={false}
          className="button-main"
          type="submit"
          onClick={() => {}}
        >
          Login
        </button>
      </Form>
      <button className="button-secondary" onClick={() => {}}>
        Sign up
      </button>
    </div>
  );
};

export default LoginForm;
