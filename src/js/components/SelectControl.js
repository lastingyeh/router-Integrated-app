import React, { PropTypes } from 'react'
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'

const SelectControl = ({ id, label, placeholder, selectList, onChange }) => (
  <FormGroup controlId={id}>
    <Col sm={2} md={2}>
      <ControlLabel>{label}</ControlLabel>
    </Col>
    <Col sm={9} md={8}>
      <FormControl componentClass="select"
                   placeholder={placeholder}
                   onChange={onChange}>
        (selectList && selectList.length > 0)?
        {
          selectList.map(
            (select, index) =>
              <option key={index} value={select.value}>
                {select.name}
              </option>
          )
        }:null
      </FormControl>
    </Col>
  </FormGroup>
)

SelectControl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  selectList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func,
}

export default SelectControl
