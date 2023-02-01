import React, { ChangeEventHandler, FormEventHandler } from "react";

interface FormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
  buttonText: string;
}

function TodoForm({
  handleSubmit,
  handleChange,
  value,
  placeholder,
  buttonText,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default TodoForm;
