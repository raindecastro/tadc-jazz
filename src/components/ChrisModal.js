import React from 'react';
import Modal from 'react-modal';
import chris1 from '../../dist/img/chris1.png';

const ChrisModal = (props) => (
        <Modal
        isOpen={props.isOpen}
        contentLabel="Selected Option"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
        >
            <div className="modal__container">
            <h1 className="modal__title">Chris</h1>
            <img className="image1" src={chris1} />
            <p className="welcome__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, purus vitae eleifend venenatis, ipsum arcu mollis orci, vel bibendum eros nulla nec urna. Phasellus ac tincidunt arcu. Aliquam ut facilisis nunc, at laoreet magna. Morbi a vulputate elit. Nullam sed velit eros. Vestibulum tellus urna, porta vel hendrerit placerat, porttitor ultricies ante. Mauris nec dolor in lacus consequat viverra. Vivamus rhoncus dolor diam, eu rutrum quam rhoncus quis. Sed molestie risus nec semper luctus. Pellentesque eu consequat lectus, auctor consectetur metus. Duis cursus est elit, ac posuere risus efficitur sed. Aliquam gravida varius dui ac luctus. Etiam ut elementum mauris, eu suscipit libero. Sed vitae placerat odio, at auctor diam.</p>         
            <p className="welcome__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, purus vitae eleifend venenatis, ipsum arcu mollis orci, vel bibendum eros nulla nec urna. Phasellus ac tincidunt arcu. Aliquam ut facilisis nunc, at laoreet magna. Morbi a vulputate elit. Nullam sed velit eros. Vestibulum tellus urna, porta vel hendrerit placerat, porttitor ultricies ante. Mauris nec dolor in lacus consequat viverra. Vivamus rhoncus dolor diam, eu rutrum quam rhoncus quis. Sed molestie risus nec semper luctus. Pellentesque eu consequat lectus, auctor consectetur metus. Duis cursus est elit, ac posuere risus efficitur sed. Aliquam gravida varius dui ac luctus. Etiam ut elementum mauris, eu suscipit libero. Sed vitae placerat odio, at auctor diam.</p>

            <button onClick={() => {
                props.showMenuIcon()   
                props.closeModal()
            }}>exit</button>
            </div>
            
        </Modal>
);

export default ChrisModal;