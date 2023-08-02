import React, { useRef } from "react";
// import { useState } from "react";

const Form = ({ fetchWeather }) => {
  const searchKey = useRef("");
  // const [key, setKey] = useState("");

  return (
    <div className="w-100 d-flex mt-3">
      <input
        ref={searchKey}
        type="text"
        className="form-control ms-5"
        placeholder="Enter Country..."
      />
      {/* <input
        value={key}
        onChange={(e) => setKey(e.target.value)}
        type="text"
        className="form-control ms-5"
        placeholder="Enter Country..."
      /> */}
      <input
        type="button"
        onClick={() => fetchWeather(searchKey.current.value)}
        value="Search"
        className="ms-2 me-5 btn btn-dark"
      />
    </div>
  );
};

export default Form;
