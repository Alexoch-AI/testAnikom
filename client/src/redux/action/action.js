import {
  ADD_ITEM,
  ALL_ITEMS,
  DELETE_ITEM,
  DRAGGBLE_ITEMS,
  FILTER_ITEMS,
  REDACT_ITEM,
} from "../types/types";

export const thunkAllItems = () => async (dispatch, getState) => {
  // const response = await fetch("http://url/allitems")
  // const serverResponse = await response.json()
  // console.log('serverRspns2', { serverResponse })
  const psevdoBD = [
    {
      id: "adjksfnadskjf12323131",
      order: 1,
      title: "Люстра",
      count: "4",
      price: "3500",
      color: "Зеленый",
      marker: 2,
      img: "",
    },
    {
      id: "21312eqwdasczx",
      order: 2,
      title: "Звезда, по имени солнце",
      count: "1",
      price: "0",
      color: "Красный",
      marker: 1,
      img: "",
    },
    {
      id: "123ewqdsaxcdaeq1e2",
      order: 3,
      title: "Пакет пятерочка",
      count: "3",
      price: "5",
      color: "Зеленый",
      marker: 2,
      img: "",
    },
    {
      id: "wqefdvcsew1233",
      order: 4,
      title: "macbookPro 2021(m1)",
      count: "10",
      price: "101000",
      color: "Синий",
      marker: 3,
      img: "",
    },
  ];
  dispatch(allItems(psevdoBD));
};

export const allItems = (allItems) => {
  return {
    type: ALL_ITEMS,
    payload: allItems,
  };
};

export const thunkAddItem = (item) => async (dispatch, getState) => {
  // const response = await fetch("http://url/createitem", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(item),
  // })
  // const serverResponse = await response.json()
  if (item.color === "Красный") {
    item.marker = 1;
  } else if (item.color === "Зеленый") {
    item.marker = 2;
  } else {
    item.marker = 3;
  }
  dispatch(addItem(item));
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const thunkRedactItem =
  ({ inputs }) =>
  async (dispatch, getState) => {
    if (inputs.color === "Красный") {
      inputs.marker = 1;
    } else if (inputs.color === "Зеленый") {
      inputs.marker = 2;
    } else {
      inputs.marker = 3;
    }
    dispatch(redactItem(inputs));
  };

export const redactItem = (item) => {
  return {
    type: REDACT_ITEM,
    payload: item,
  };
};

export const thunkDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(deleteItem(id));
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const filterItems = (marker) => {
  return {
    type: FILTER_ITEMS,
    payload: marker,
  };
};

export const thunkDraggableItems = (newState) => async (dispatch, getState) => {
  const sortItems = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  dispatch(draggbleItems(newState.sort(sortItems)));
};

export const draggbleItems = (newState) => {
  console.log(newState);
  return {
    type: DRAGGBLE_ITEMS,
    payload: newState,
  };
};
