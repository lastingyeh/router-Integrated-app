import React, { PropTypes } from 'react'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  InputGroup,
  Glyphicon,
  Col,
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap'

const InputControl = (props) => {

  const tooltip = <Tooltip id={props.id}>{props.label}</Tooltip>

  return (
    <FormGroup controlId={props.id}>
      <Col sm={2} md={2}>
        <ControlLabel>{props.label}</ControlLabel>
      </Col>
      <Col sm={9} md={8}>
        <OverlayTrigger overlay={tooltip} placement='top'>
          <InputGroup>
            <FormControl {...props} />
            <InputGroup.Addon>
              <Glyphicon glyph={props.icon} />
            </InputGroup.Addon>
          </InputGroup>
        </OverlayTrigger>
      </Col>
    </FormGroup>
  )
}

InputControl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default InputControl;
