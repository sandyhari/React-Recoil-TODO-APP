import React from "react";
import { useHistory } from "react-router-dom";
import routes from "../routes/routes";

const Header = () => {
  const history = useHistory();

  return (
    <div className="d-sm-flex align-items-center justify-content-between m-4">
      <h1 className="h3 mb-0 font-weight-bold text-uppercase text-gray-800">
        Todo List App{" "}
        <span className="badge badge-dark text-uppercase font-weight-bold">
          <i> Using Recoil.js</i>
        </span>
      </h1>
      <button
        className="d-sm-inline-block font-weight-bold btn btn-sm btn-primary shadow-sm"
        onClick={() => history.push(routes.home)}
      >
        <i className="fa fa-chevron-circle-left custom"></i>
      </button>
    </div>
  );
};

export default Header;
