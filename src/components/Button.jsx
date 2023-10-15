import React from "react";

export const PlusButton = ({ actions, text, result }) => {
  return (
    <>
      <button className="increment custom-button" onClick={actions}>
        {text} {result}
      </button>
    </>
  );
};

export const BuyButton = ({ actions }) => {
  return (
    <>
      <button className="buy" onClick={actions}>
        Beli
      </button>
    </>
  );
};

export const DetailsButton = ({ actions }) => {
  return (
    <>
      <button className="details" onClick={actions}>
        Rincian
      </button>
    </>
  );
};

export const SubmitButton = ({ actions }) => {
  return (
    <>
      <button className="submit" onClick={actions}>
        Kirim
      </button>
    </>
  );
};

export const BackButton = ({ actions }) => {
  return (
    <>
      <button className="back" onClick={actions}>
        Kembali
      </button>
    </>
  );
};
