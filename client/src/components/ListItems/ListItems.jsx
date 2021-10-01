import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkDeleteItem } from "../../redux/action/action";
import RedactItem from "./RedactItem/RedactItem";
import style from './listItem.module.css'

function ListItems({ obj }) {
  const [showRedact, setShowRedact] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {showRedact ? (
        <RedactItem
          obj={obj}
          setShowRedact={setShowRedact}
          showRedact={showRedact}
        />
      ) : (
        <>
          <td>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsr7SBjkLkecGPkc9oJp9Mno8sfsHm4UrYDRq8sQgR4XYtlDs9"
              alt="img"
              width="50px"
            />
          </td>
          <td width="250px">{obj.title}</td>
          <td width="150px">{obj.price + " руб."}</td>
          <td width="100px">{obj.color}</td>
          <td width="100px">{obj.count + " шт."}</td>
          <td>
            <button
              className={style.buttonControl}
              onClick={() => setShowRedact(true)}
            >
              Редактировать
            </button>
            <button onClick={() => dispatch(thunkDeleteItem(obj.id))}
              className={style.buttonControl}
            >
              Удалить
            </button>
          </td>
        </>
      )}
    </>
  );
}

export default ListItems;
