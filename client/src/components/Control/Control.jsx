import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkAddItem } from "../../redux/action/action";
import ModalAddItem from "../ModalAddItem/ModalAddItem";
import { v4 as uuidv4 } from "uuid";
import style from"./control.module.css";

function Control({ setMenuActive, menuActive }) {
  const [modalActive, setModalActive] = useState(false);

  const [drag, setDrag] = useState(false);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    id: uuidv4(),
    order: 0,
    title: "",
    count: "",
    price: "",
    color: "" || "Красный",
    marker: 0,
    img: "",
  });

  const inputsHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(thunkAddItem(inputs));
    setModalActive(false);
    setInputs({
      title: "",
      count: "",
      price: "",
      color: "",
      img: "",
      id: uuidv4(),
      order: 0,
    });
  };

  const handlerClose = () => {
    setModalActive(false);
    setInputs({
      title: "",
      count: "",
      price: "",
      color: "",
      img: "",
      id: uuidv4(),
      order: 0,
    });
  };

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  return (
    <>
      <ul className={style.menuControl}>
        Управление
        <span className={style.polygon1}></span>
        <li>
          <button className={style.buttonControl} onClick={() => setModalActive(true)}>Добавить товар</button>
        </li>
        <li>
          <button className={style.buttonControl} onClick={() => setMenuActive(!menuActive)}>Вкладки</button>
        </li>
      </ul>

      <ModalAddItem active={modalActive} setActive={setModalActive}>
        <form onSubmit={(e) => submitHandler(e)}>
          <div
            className={style.formDiv}
          >
            <label>Добавить товар</label>
            <span
              className={style.close}
              onClick={() => setModalActive(false)}
            ></span>
          </div>
          <div className={style.formColumn}>
            <label>Название</label>
            <input
              required
              name="title"
              onChange={inputsHandler}
              type="text"
              value={inputs.title}
            />
            <label>Цена</label>
          <div>
            <input
              required
              name="price"
              onChange={inputsHandler}
              type="number"
              value={inputs.price}
              className={style.number}
            />
            <label className={style.labelNumberInputs}> руб.</label>
          </div>


            <label>Количество</label>
            <div>
            <input
              required
              name="count"
              onChange={inputsHandler}
              type="number"
              value={inputs.count}
              className={style.number}
            />
            <label className={style.labelNumberInputs}> шт.</label>
            </div>

            <label>Вкладка</label>
            <select
              value={inputs.color}
              onChange={inputsHandler}
              name="color"
            >
              <option defaultValue="Красный">Красный</option>
              <option value="Зеленый">Зеленый</option>
              <option value="Синий">Синий</option>
            </select>

            {drag ? (
              <div
                className={style.dropArea}
                onDragStart={(e) => dragStartHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
                onDrop={(e) => onDropHandler(e)}
              >
                Перетащите сюда картинку
              </div>
            ) : (
              <div className={style.divLabelFileUpload}>
                <label
                  htmlFor="file-upload"
                  className={style.customFileUpload}
                  onDragStart={(e) => dragStartHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragStartHandler(e)}
                >
                  Кликните или перетащите сюда картинку
                </label>
                <input onChange={inputsHandler} id="file-upload" type="file" />
              </div>
            )}
            <div className={style.divButtons}>
            <button type="submit" className={style.buttonSumbit}>Добавить</button>
            <button onClick={handlerClose} className={style.buttonClose}>Отмена</button>
            </div>
          </div>
        </form>
      </ModalAddItem>
    </>
  );
}

export default Control;
