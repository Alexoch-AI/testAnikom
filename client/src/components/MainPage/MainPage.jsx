import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkAllItems, thunkDraggableItems } from "../../redux/action/action";
import ListItems from "../ListItems/ListItems";
import "./mainPage.css";

function MainPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  console.log("items", items);

  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    dispatch(thunkAllItems());
  }, [dispatch]);

  const dragStartHandler = (e, obj) => {
    setCurrentItem(obj);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e, obj) => {
    e.preventDefault();
    dispatch(
      thunkDraggableItems(
        items.map((element) => {
          if (element.id === obj.id) {
            return { ...element, order: currentItem?.order };
          }
          if (element.id === currentItem?.id) {
            return { ...element, order: obj.order };
          }
          return element;
        })
      )
    );
  };

  return (
    <table style={{ marginLeft: "50px" }}>
      <tbody>
        {items?.length
          ? items.map((el, index) => {
              return (
                <tr
                  key={el.id}
                  draggable={true}
                  style={{ display: "flex", alignItems: "center" }}
                  onDragStart={(e) => dragStartHandler(e, el)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => dropHandler(e, el)}
                >
                  <ListItems obj={el} />
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}

export default MainPage;
