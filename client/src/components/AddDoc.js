import React, { Fragment, useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { addDoc } from "../actions/addDoc";

var collection = [];

const initialState = {
  msz: "40f20235-5039-48fc-9971-6807bcaba920",
  category: "a84f5dc6-1940-437a-b7f2-e60c64de1661",
  snils: "",
  fam: "",
  name: "",
  last: "",
  gender: "Male",
  birth: "",
  dec_date: "",
  date_start: "",
  amount: "",
};

const initialDopState = {
  snils: "",
  fam: "",
  name: "",
  last: "",
  birth: "",
};

const AddDoc = () => {
  const [formData, setFormData] = useState(initialState);

  const {
    msz,
    category,
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
    setFormData({ ...initialDopState });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addDoc({ collection });
    console.log("DONE");
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
                Обеспечения питанием, одеждой, обувью, другими предметами
              </option>
              <option value="fe69a647-50b6-440f-a13f-531adab2f2f1">
                Компенсация стоимости проезда на городском транспорте
              </option>
              <option value="ff1c0d6d-a3ae-4d0d-87ce-45179dce2945">
                Единовременная выплата пособие выпускникам организаций
              </option>
              <option value="95452b16-374d-47af-a2cc-2dbccc0a984d">
                Единовременная выплата (пособие) канцелярия
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="Form.ControlSelectcategory">
            <Form.Label>Категория выплаты</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={category}
              onChange={onChange}
            >
              <option value="a84f5dc6-1940-437a-b7f2-e60c64de1661">
                Лица из числа детей-сирот и детей, оставшихся без попечения
                родителей
              </option>
              <option value="1dfc8dd8-f4bf-4086-b275-4a60e770428c">
                Дети в возрасте до 18 лет, а также старше
              </option>
              <option value="3025c7e4-9ef1-4b48-a9df-bcec8f45d54b">
                Лица из числа детей-сирот и детей, оставшихся без попечения
                родителей
              </option>
              <option value="362c9048-c421-434f-bee5-3819b0441105">
                Дети в возрасте до 18 лет, а также старше этого возраста(4-я
                строка)
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

          <Form.Row>
            <Form.Group as={Col} controlId="Form.ControlSelectGender">
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

            <Form.Group as={Col} controlId="formGridBirth">
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control
                placeholder="2020-10-12"
                name="birth"
                value={birth}
                onChange={onChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} controlId="formGridDec">
            <Form.Label>Дата назначения</Form.Label>
            <Form.Control
              placeholder="2020-10-12"
              name="dec_date"
              value={dec_date}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridStart">
            <Form.Label>Дата выплаты</Form.Label>
            <Form.Control
              placeholder="2020-10-12"
              name="date_start"
              value={date_start}
              onChange={onChange}
            />
          </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAmount">
            <Form.Label>Размер выплаты</Form.Label>
            <Form.Control
              placeholder="Иванович"
              name="amount"
              value={amount}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Row >
            <Button variant="primary" type="submit" onClick={makeCollection}>
              Добавить в коллекцию ({collection.length})
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



export default AddDoc;
