import React from "react";
import PropTypes from "prop-types";
const TextField = ({ label, text, type, id, value, handleChange }) => (
  <div className="form-group">
    <input
      type={type}
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);
TextField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default TextField;