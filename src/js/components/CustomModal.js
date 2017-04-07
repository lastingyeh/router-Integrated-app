import React, { PropTypes } from 'react'
import { Modal } from 'react-bootstrap';

const CustomModal = (props) => {

  const { isShow, title, content, onHide, styles, children } = props
  const { titleStyle, bodyStyle, footerStyle } = styles

  // const confirmButtons = (buttons && buttons.length > 0) ?
  //   (buttons.map((item, index) => React.cloneElement(item, { key: index }))) : buttons

  return (
    <Modal show={isShow} onHide={onHide}>
      <Modal.Header className={titleStyle}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={bodyStyle}>
        {content}
      </Modal.Body>
      <Modal.Footer className={footerStyle}>
        {children}
      </Modal.Footer>
    </Modal>
  )
}

CustomModal.defaultProps = {
  isShow: false,
  title: 'title',
  content: null,
  onHide: () => {
  },
  styles: {
    header: '',
    body: '',
    footer: ''
  },
  children: null,
}

CustomModal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  onHide: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string
  }),
  children: PropTypes.arrayOf(PropTypes.element)
}
export default CustomModal;
