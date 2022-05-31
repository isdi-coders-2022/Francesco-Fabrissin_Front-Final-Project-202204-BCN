import { useState } from "react";
import { Form } from "react-bootstrap";
import FormStyled from "../LoginForm/FormStyled";

const RegisterForm = (): JSX.Element => {
  const blankData = {
    username: "",
    password: "",
    email: "",
    location: "",
    image: "",
  };

  const [formData, setFormData] = useState(blankData);

  return (
    <FormStyled>
      <img
        className="logo"
        src="/images/RecordSwapp-logo.png"
        alt="recordswapp logo"
      />
      <Form onSubmit={() => {}} className="login-form">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          className="form-control"
          autoComplete="off"
          placeholder="Type your username"
          id="username"
          value={formData.username}
          //onChange={changeFormData}
          type="text"
        />
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          autoComplete="off"
          placeholder="ex. john1234@recordswapp.com"
          id="email"
          value={formData.email}
          // onChange={changeFormData}
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
          // onChange={changeFormData}
          type="password"
        />
        <label className="form-label" htmlFor="location">
          Location (City or closer city)
        </label>
        <input
          className="form-control"
          autoComplete="off"
          placeholder="Ex. Milan"
          id="location"
          value={formData.location}
          // onChange={changeFormData}
          type="text"
        />
        <label className="form-label" htmlFor="image">
          Profile image
        </label>
        <input
          className="form-control"
          id="image"
          //onChange={changeFormData}
          type="file"
        />
        <div className="containr text-center">
          <button
            disabled={formData.username === "" || formData.password === ""}
            className="button-main"
            type="submit"
          >
            Register
          </button>
        </div>
      </Form>
      <button className="button-secondary">Already have an account?</button>
    </FormStyled>
  );
};

export default RegisterForm;
