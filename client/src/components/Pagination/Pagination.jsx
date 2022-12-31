import React from "react";
import * as actions from "../../redux/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import "./pagination.modules.css";

export const Pagination = (props) => {
  const { cardsQuantity } = props;
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.currentPage);
  let pages = [];
  for (let i = 1; i <= Math.ceil(cardsQuantity / 8); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {currentPage !== 1 ? (
        <>
          <button
            onClick={() => dispatch(actions.pageChanging(currentPage - 1))}
          >
            {"<"}
          </button>
          <button
            onClick={() => dispatch(actions.pageChanging(currentPage - 1))}
          >
            {currentPage - 1}
          </button>
        </>
      ) : (
        <>
          <button disable>{"<"}</button>
        </>
      )}

      <button className="active">{currentPage}</button>

      {currentPage !== pages[pages.length - 1] ? (
        <>
          <button
            onClick={() => dispatch(actions.pageChanging(currentPage + 1))}
          >
            {currentPage + 1}
          </button>
          {currentPage === 1 ? (
            <button
              onClick={() => dispatch(actions.pageChanging(currentPage + 2))}
            >
              {currentPage + 2}
            </button>
          ) : null}
          <button
            onClick={() => dispatch(actions.pageChanging(currentPage + 1))}
          >
            {">"}
          </button>
        </>
      ) : (
        <>
          <button disable>{currentPage + 1}</button>
          <button disabled>{">"}</button>
        </>
      )}
    </div>
  );
};
