import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkDeleteItem, thunkRedactItem } from "../../../redux/action/action";

function RedactItem({ obj, setShowRedact, showRedact }) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: obj.title,
    count: obj.count,
    price: obj.price,
    color: obj.color,
    marker: obj.marker,
    img: obj.img,
    id: obj.id,
    order: obj.order,
  });

  const inputsHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async () => {
    dispatch(thunkRedactItem({ inputs }));
    setShowRedact(!showRedact);
  };

  return (
    <>
      <td>
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsr7SBjkLkecGPkc9oJp9Mno8sfsHm4UrYDRq8sQgR4XYtlDs9"
          alt="img"
          width="50px"
        />
      </td>
      <td width="250px">
        <input
          name="title"
          type="text"
          value={inputs.title}
          onChange={inputsHandler}
        />
      </td>
      <td width="150px">
        <input
          name="price"
          style={{ width: "50px" }}
          type="number"
          value={inputs.price}
          onChange={inputsHandler}
        />{" "}
        руб.
      </td>
      <td width="100px">
        <select
          value={inputs.color}
          onChange={inputsHandler}
          name="color"
          placeholder="Вкладка"
        >
          <option defaultValue="Красный">Красный</option>
          <option value="Зеленый">Зеленый</option>
          <option value="Синий">Синий</option>
        </select>
      </td>
      <td width="100px">
        <input
          name="count"
          style={{ width: "50px" }}
          type="number"
          value={inputs.count}
          onChange={inputsHandler}
        />{" "}
        шт.
      </td>
      <td>
        <button onClick={submitHandler} style={{ marginRight: "20px" }}>
          Редактировать
        </button>
        <button onClick={() => dispatch(thunkDeleteItem(obj.id))}>
          Удалить
        </button>
      </td>
    </>
  );
}

export default RedactItem;
