import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addRecordThunk } from "../../redux/thunks/recordsThunks";
import { IRecord } from "../../types/types";
import Button from "../Button/Button";
import FormStyled from "../LoginForm/FormStyled";

interface Props {
  recordId?: string;
}

const AddEditRecordForm = ({ recordId }: Props): JSX.Element => {
  const blankData = {
    title: "",
    artist: "",
    year: "",
    genre: "",
    conditions: "",
    price: "",
    youtube_url: "",
    image: "",
  };

  const [formData, setFormData] = useState<IRecord>(blankData);
  const records = useAppSelector((state) => state.records);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let record = useRef<IRecord>();

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files?.[0] || ""
          : event.target.value,
    });
  };

  useEffect(() => {
    if (recordId) {
      record.current = records.find((record) => record.id === recordId);
      setFormData(record.current as IRecord);
    }
  }, [recordId, records]);

  const buttonDisabled = () => {
    if (
      formData.title === "" ||
      formData.artist === "" ||
      formData.year === "" ||
      formData.genre === "" ||
      formData.conditions === "" ||
      formData.price === ""
    ) {
      return true;
    }
    return false;
  };

  const clearData = () => {
    setFormData(blankData);
  };

  const submitAddEditRecord = (event: React.FormEvent) => {
    event.preventDefault();

    const newFormData = new FormData();
    newFormData.append("title", formData.title);
    newFormData.append("artist", formData.artist);
    newFormData.append("year", formData.year);
    newFormData.append("genre", formData.genre);
    newFormData.append("conditions", formData.conditions);
    newFormData.append("price", formData.price);
    newFormData.append("youtube_url", formData.youtube_url ?? "");
    newFormData.append("image", formData.image);
    dispatch(addRecordThunk(newFormData));
    navigate("/myCollection");
    clearData();
  };

  return (
    <FormStyled>
      <img
        className="add-edit-logo"
        src="/images/Black-logo.png"
        alt="recordswapp logo"
      />
      <Form className="login-form add-edit-form" onSubmit={submitAddEditRecord}>
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
        <label className="form-label hidden" htmlFor="genre">
          Genre
        </label>
        <input
          className="form-control"
          formNoValidate
          autoComplete="off"
          placeholder="Genre"
          id="genre"
          value={formData.genre}
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
            type="submit"
            disabled={buttonDisabled()}
            className="button"
            add={recordId ? false : true}
            edit={recordId ? true : false}
            text={recordId ? "Edit" : "Add record"}
          />
        </div>
      </Form>
    </FormStyled>
  );
};

export default AddEditRecordForm;
