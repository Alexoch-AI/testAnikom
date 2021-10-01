import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterItems, thunkAllItems } from "../../redux/action/action";
import { useParams } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

function Tabs() {
  let { marker } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkAllItems());
    dispatch(filterItems(marker));
  }, [marker, dispatch]);

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default Tabs;
