import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Header = () => {
  return (
    <div className="mb-10">
      <div className="navbar bg-base-100 ">
        <a href="/" className="ml-20 btn btn-ghost normal-case text-3xl mt-10">
          <FontAwesomeIcon className="pr-2" icon={faDumbbell} size="xl" />
          Red-GYM
        </a>
      </div>
    </div>
  );
};

export default Header;
