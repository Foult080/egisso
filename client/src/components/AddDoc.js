import React, { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addDoc } from "../actions/addDoc";
import PropTypes from "prop-types";

var collection = [];

const initialState = {
  msz: "40f20235-5039-48fc-9971-6807bcaba920",
  snils: "",
  fam: "",
  name: "",
  last: "",
  gender: "",
  birth: "",
  dec_date: "",
  date_start: "",
  amount: "",
};

const AddDoc = () => {
  const [formData, setFormData] = useState(initialState);

  const {
    msz,
    snils,
    fam,
    name,
    last,
    gender,
    birth,
    dec_date,
    date_start,
    amount,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const makeCollection = (e) => {
    e.preventDefault();
    collection.push(formData);
    console.log(collection);
    setFormData({ ...initialState });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addDoc({collection});
    console.log("HELLO");
  };

  return (
    <Fragment>
      <div className="col-lg-8 col-md-8 col-sm-8 mx-auto">
        <h1 className="text-center my-4">Fucking EGISSO</h1>
        <hr />

        <Form>
          <Form.Group controlId="Form.ControlSelectMSZ">
            <Form.Label>МСЗ</Form.Label>
            <Form.Control
              as="select"
              name="msz"
              value={msz}
              onChange={onChange}
            >
              <option value="40f20235-5039-48fc-9971-6807bcaba920">
                40f20235-5039-48fc-9971-6807bcaba920
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGridSnils">
            <Form.Label>СНИЛС</Form.Label>
            <Form.Control
              placeholder="12345678912"
              name="snils"
              value={snils}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridFam">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              placeholder="Иванов"
              name="fam"
              value={fam}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              placeholder="Иван"
              name="name"
              value={name}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridLast">
            <Form.Label>Отчество</Form.Label>
            <Form.Control
              placeholder="Иванович"
              name="last"
              value={last}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="Form.ControlSelectGender">
            <Form.Label>Пол</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={gender}
              onChange={onChange}
            >
              <option value="Male">Мужчина</option>
              <option value="Female">Женщина</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGridBirth">
            <Form.Label>Дата рождения</Form.Label>
            <Form.Control
              placeholder="2020-10-12"
              name="birth"
              value={birth}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridDec">
            <Form.Label>Дата назначения</Form.Label>
            <Form.Control
              placeholder="2020-10-12"
              name="dec_date"
              value={dec_date}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridStart">
            <Form.Label>Дата выплаты</Form.Label>
            <Form.Control
              placeholder="2020-10-12"
              name="date_start"
              value={date_start}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridAmount">
            <Form.Label>Размер выплаты</Form.Label>
            <Form.Control
              placeholder="Иванович"
              name="amount"
              value={amount}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Row>
            <Button variant="primary" type="submit" onClick={makeCollection}>
              Добавить в коллекцию ()
            </Button>
            <Button
              className="ml-1"
              variant="danger"
              type="submit"
              onClick={onSubmit}
            >
              Сформировать XML
            </Button>
          </Form.Row>
        </Form>
      </div>
    </Fragment>
  );
};

AddDoc.propTypes = {
  addDoc: PropTypes.func.isRequired
};

export default AddDoc;
