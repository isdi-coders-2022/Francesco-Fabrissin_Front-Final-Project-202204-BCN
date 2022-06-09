import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addRecordThunk,
  editRecordThunk,
} from "../../redux/thunks/recordsThunks";
import { loadRecordThunk } from "../../redux/thunks/recordThunk";
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

  const recordInfo = useAppSelector((state) => state.record);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (recordId) {
      dispatch(loadRecordThunk(recordId));
    }
  }, [dispatch, recordId]);

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

  useEffect(() => {
    if (recordId) {
      setFormData(recordInfo);
    }
  }, [recordId, recordInfo]);

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
    if (buttonDisabled()) {
      toast.error("Please fill all required fields");
    } else {
      recordId
        ? dispatch(editRecordThunk(recordInfo.id as string, newFormData))
        : dispatch(addRecordThunk(newFormData));
      navigate("/my_collection");
      clearData();
    }
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
        <select
          name="genre"
          className="form-select"
          onChange={changeFormData}
          value={formData.genre}
          placeholder="Genre"
          id="genre"
        >
          <option disabled value="">
            Genre
          </option>
          <option value="Rock">Rock</option>
          <option value="Reggae">Reggae</option>
          <option value="Electronic">Electronic</option>
          <option value="Disco">Disco</option>
          <option value="Jazz">Jazz</option>
          <option value="Funk/Soul">Funk/Soul</option>
          <option value="Classical">Classical</option>
          <option value="Latin">Latin</option>
          <option value="Pop">Pop</option>
          <option value="Alternative">Alternative</option>
        </select>
        <label className="form-label hidden" htmlFor="conditions">
          Record Conditions
        </label>
        <select
          name="conditions"
          className="form-select"
          onChange={changeFormData}
          value={formData.conditions}
          placeholder="Record Conditions"
          id="conditions"
        >
          <option disabled value="">
            Record Conditions
          </option>
          <option value="Poor">Poor</option>
          <option value="G">G</option>
          <option value="VG">VG</option>
          <option value="VG+">VG+</option>
          <option value="NM">NM</option>
          <option value="M">M</option>
        </select>
        <label className="form-label hidden" htmlFor="price">
          Price
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
          Favourite track YouTube link (optional)
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
