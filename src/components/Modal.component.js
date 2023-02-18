import '../styles/Modal.css';
const Modal = ({ closeModal, messages }) => {

  return (
    <div className='modal-overlay'>
      <div className='modal-container flex-modal'>
        <h2>Error</h2>
        <h6>{`${messages.join(', ')}`}.</h6>
        <button className='btn close-modal-btn' onClick={closeModal}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
