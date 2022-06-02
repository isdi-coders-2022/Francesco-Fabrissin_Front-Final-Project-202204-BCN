import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { registerThunk } from "../../redux/thunks/userThunks";
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files?.[0] || ""
          : event.target.value,
    });
  };

  const clearData = () => {
    setFormData(blankData);
  };

  const navigateToLogin = () => {
    navigate("/user/login");
  };

  const submitRegister = (event: React.FormEvent) => {
    event.preventDefault();

    const newFormData = new FormData();
    newFormData.append("username", formData.username);
    newFormData.append("password", formData.password);
    newFormData.append("email", formData.email);
    newFormData.append("location", formData.location);
    newFormData.append("image", formData.image);

    dispatch(registerThunk(newFormData, formData.password));
    clearData();
  };

  return (
    <FormStyled>
      <img
        className="logo"
        src="/images/RecordSwapp-logo.png"
        alt="recordswapp logo"
      />
      <Form onSubmit={submitRegister} className="login-form">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="Type your username"
          id="username"
          value={formData.username}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="ex. john1234@recordswapp.com"
          id="email"
          value={formData.email}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="******"
          id="password"
          value={formData.password}
          onChange={changeFormData}
          type="password"
        />
        <label className="form-label" htmlFor="location">
          Location (City or closer city)
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="ex. Milan"
          id="location"
          value={formData.location}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label" htmlFor="image">
          Profile image
        </label>
        <input
          className="form-control"
          id="image"
          type="file"
          onChange={changeFormData}
        />
        <div className="containr text-center">
          <button
            disabled={
              formData.username === "" ||
              formData.password === "" ||
              formData.location === "" ||
              formData.email === ""
            }
            className="btn button-main"
            type="submit"
          >
            Register
          </button>
        </div>
      </Form>
      <button className="button-secondary" onClick={navigateToLogin}>
        Already have an account?
      </button>
    </FormStyled>
  );
};

export default RegisterForm;
