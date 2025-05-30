import "./ItemModal.css";

function ItemModal ({ activeModal, onClose, card}) {
    return (
        <div className={`modal ${activeModal === 'preview' ? 'modal_opened' : ''}`}>
            <div className="modal__content_type_image">
            <button onClick={onClose} type="button" className="modal__close"></button>
            <img src={card?.link || ''} alt={card?.name || 'Preview'} className="modal__image" />
            <div className="modal__footer">
                <h2 className="modal__caption">{card?.name || 'No Name'}</h2>
                <p className="modal__weather">Weather: {card?.weather || 'Unknown'}</p>
            </div>
            </div>
        </div>
    )

}

 export default ItemModal;