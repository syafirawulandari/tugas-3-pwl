import React from "react";

export const InputText = ({
  onChange,
  value,
  name,
  id,
  type,
  labeltext,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={name}>{labeltext}</label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export const InputMessages = ({ onChange, value, name, id, placeholder }) => {
  return (
    <>
      <textarea
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        required
      ></textarea>
    </>
  );
};
