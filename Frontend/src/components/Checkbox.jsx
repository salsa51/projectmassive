import React from 'react';

export const Checkbox = ({ property1, propertyCheckboxClassName }) => {
  return (
    <input type="checkbox" className={propertyCheckboxClassName} />
  );
};

export default Checkbox