import React from 'react';

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Input;