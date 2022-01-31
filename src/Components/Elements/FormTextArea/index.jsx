import React from "react";

const FormTextArea = ({
  Label,
  Value,
  Name,
  handleChange,
  placeholder = "",
}) => {
  return (
    <div>
      <label className="form-label-input">{Label}</label>
      <textarea
        class="form-control"
        aria-label="With textarea"
        name={Name}
        onChange={handleChange}
        value={Value}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default FormTextArea;
