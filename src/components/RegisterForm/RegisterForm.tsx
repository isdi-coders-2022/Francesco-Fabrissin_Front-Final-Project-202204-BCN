import React, { useState } from "react";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
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
    genre: "",
    image: "",
  };

  const [formData, setFormData] = useState(blankData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeFormData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? (event.target as HTMLInputElement).files?.[0] || ""
          : event.target.value,
    });
  };

  const buttonDisabled = () => {
    if (
      formData.username === "" ||
      formData.password === "" ||
      formData.email === "" ||
      formData.genre === "" ||
      formData.location === ""
    ) {
      return true;
    }
    return false;
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
    newFormData.append("genre", formData.genre);
    newFormData.append("image", formData.image);

    if (buttonDisabled()) {
      toast.error("Please fill all required fields");
    } else {
      dispatch(registerThunk(newFormData, formData.password));
      clearData();
    }
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
        <label className="form-label" htmlFor="genre">
          Collection music genre
        </label>
        <select
          name="genre"
          className="form-select"
          onChange={changeFormData}
          value={formData.genre}
          placeholder="Genre"
          id="genre"
        >
          <option value="Rock">Rock</option>
          <option value="Reggae">Reggae</option>
          <option value="Electronic">Electronic</option>
          <option value="Jazz">Jazz</option>
          <option value="Funk/Soul">Funk/Soul</option>
          <option value="Classical">Classical</option>
          <option value="Latin">Latin</option>
          <option value="Pop">Pop</option>
          <option value="Alternative">Alternative</option>
          <option value="Mixed">Mixed</option>
        </select>
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
          <button className="btn button-main" type="submit">
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
