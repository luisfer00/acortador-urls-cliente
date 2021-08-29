import React from "react";

const Error = ({ errorMsg }) => {
  return (
    <p className="bg-red-500 rounded text-lg py-1 mt-4 text-white sm:mx-12">
      {errorMsg}
    </p>
  );
};

export default Error;
