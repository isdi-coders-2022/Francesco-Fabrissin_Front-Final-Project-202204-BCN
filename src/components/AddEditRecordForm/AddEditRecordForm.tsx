import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../Button/Button";
import FormStyled from "../LoginForm/FormStyled";

interface Props {
  edit?: string;
}

const AddEditRecordForm = ({ edit }: Props): JSX.Element => {
  const blankData = {
    title: "",
    artist: "",
    year: "",
    conditions: "",
    price: "",
    youtube_url: "",
    image: "",
  };

  const [formData, setFormData] = useState(blankData);

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files?.[0] || ""
          : event.target.value,
    });
  };

  const buttonDisabled = () => {
    if (
      formData.title === "" ||
      formData.artist === "" ||
      formData.year === "" ||
      formData.conditions === "" ||
      formData.price === "" ||
      formData.youtube_url === ""
    ) {
      return true;
    }
    return false;
  };

  return (
    <FormStyled>
      <img
        className="add-edit-logo"
        src="/images/Black-logo.png"
        alt="recordswapp logo"
      />
      <Form className="login-form add-edit-form">
        <span>Details</span>
        <label className="form-label hidden" htmlFor="title">
          Title
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="Title"
          id="title"
          value={formData.title}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label hidden" htmlFor="artist">
          Artist
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="Artist"
          id="artist"
          value={formData.artist}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label hidden" htmlFor="year">
          Year of Release
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="Year of Release"
          id="year"
          value={formData.year}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label hidden" htmlFor="conditions">
          Record Conditions
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="Record Conditions"
          id="conditions"
          value={formData.conditions}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label hidden" htmlFor="price">
          Record Conditions
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="Price"
          id="price"
          value={formData.price}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label" htmlFor="youtube_url">
          Favourite track YouTube link
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="Paste the url here"
          id="youtube_url"
          value={formData.youtube_url}
          onChange={changeFormData}
          type="text"
        />
        <label className="form-label" htmlFor="image">
          Add Cover
        </label>
        <input
          className="form-control"
          id="image"
          type="file"
          onChange={changeFormData}
        />
        <div className="container text-center">
          <Button
            disabled={buttonDisabled()}
            className="button"
            add={edit ? false : true}
            edit={edit ? true : false}
            text={edit ? "Edit" : "Add record"}
            action={() => {}}
          />
        </div>
      </Form>
    </FormStyled>
  );
};

export default AddEditRecordForm;
