import React from "react";

const CardDetail = ({ data }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-lg text-primary mb-2">{data[0].main}</div>
          <p className="text-gray text-base">
          {data[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
