import React from 'react';
import propTypes from 'prop-types';

const Select = ({item, value, setValue, focus}) => {
  value = value || "";
  return (
      <select className="fluid action-selects" value={value} onChange={ setValue } name={ item.name } autoFocus={ focus }>
        <option key="palceholder" disabled value="">{item.placeholder}</option>
        {item.options.map((opt) => <option key={opt.key} value={opt.value}>{opt.text}</option>)}
      </select>
    )
}
Select.propTypes = {
  item: propTypes.object.isRequired,
  value: propTypes.string,
  setValue: propTypes.func.isRequired,
  focus: propTypes.bool
}


export default Select
