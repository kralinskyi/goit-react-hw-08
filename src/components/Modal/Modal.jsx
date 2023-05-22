import { Component } from 'react';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEsc);
  }

  handlePressEsc = ({ code }) => {
    code === 'Escape' && this.props.closeModal();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEsc);
  }

  render() {
    const { children, closeModal } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 300,
            height: 300,
            backgroundColor: 'yellow',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3 className="modal-title">Modal</h3>
          <button
            onClick={closeModal}
            style={{ width: 100, height: 50, margin: '0 auto' }}
          >
            close Modal
          </button>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
