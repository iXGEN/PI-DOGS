import React from "react";
import * as actions from "../../redux/actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import "./pagination.modules.css";

export const Pagination = (props) => {
  const { cardsQuantity } = props;
  /* console.log(cardsQuantity); */

  const dispatch = useDispatch();

  let pages = [];
  for (let i = 1; i <= Math.ceil(cardsQuantity / 8); i++) {
    pages.push(i);
  }

  const currentPage = useSelector((state) => state.currentPage);

  const handlePageUp = () => {
    if (currentPage !== pages.length) {
      dispatch(actions.pageChanging(currentPage + 1));
    }
  };

  const handlePageDown = () => {
    if (currentPage !== 1) {
      dispatch(actions.pageChanging(currentPage - 1));
    }
  };

  const handleRenderButtons = () => {
    if (pages.length < 3) {
      return pages.map((page) => {
        return (
          <button
            onClick={() => dispatch(actions.pageChanging(page))}
            className={currentPage === page ? "active" : ""}
            key={page}
          >
            {page}
          </button>
        );
      });
    }

    if (currentPage === 1) {
      return pages.slice(0, 3).map((page) => {
        return (
          <button
            onClick={() => dispatch(actions.pageChanging(page))}
            className={currentPage === page ? "active" : ""}
            key={page} //key
          >
            {page}
          </button>
        );
      });
    }
    if (currentPage === pages.length) {
      return pages.slice(-3).map((page) => {
        return (
          <button
            onClick={() => dispatch(actions.pageChanging(page))}
            className={currentPage === page ? "active" : ""}
            key={page}
          >
            {page}
          </button>
        );
      });
    }
    return pages.slice(currentPage - 2, currentPage + 1).map((page) => {
      return (
        <button
          onClick={() => dispatch(actions.pageChanging(page))}
          className={currentPage === page ? "active" : ""}
          key={page}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className="pagination">
      <button onClick={handlePageDown}>{"<"}</button>
      {handleRenderButtons()}
      <button onClick={handlePageUp}>{">"}</button>
    </div>
  );
};
