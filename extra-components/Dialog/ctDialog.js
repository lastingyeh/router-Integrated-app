import React, {Component, PropTypes} from 'react'
import {Modal} from 'react-bootstrap';

class Dialog extends Component {

    static defaultProps = {
        showDialog: false,
        title: 'title',
        content: null,
        onHide: () => {
            showDialog:false
        }
    }

    static propTypes = {
        showDialog: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.element.isRequired,
        onHide: PropTypes.func.isRequired,
        styles: PropTypes.shape({
            header: PropTypes.string,
            body: PropTypes.string,
            footer: PropTypes.string
        }),
        buttons: PropTypes.arrayOf(PropTypes.element)
    }

    render() {
        const {showDialog, title, content, onHide, styles, buttons} = this.props;
        const {titleStyle, bodyStyle, footerStyle} = styles;

        let confirmButtons = (buttons.length > 0) ?
            (buttons.map((item, index) => React.cloneElement(item,{key:index}))) : buttons;

        return (
            <Modal show={showDialog} onHide={onHide}>
                <Modal.Header className={titleStyle}>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={bodyStyle}>
                    {content}
                </Modal.Body>
                <Modal.Footer className={footerStyle}>
                    {confirmButtons}
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Dialog;
