import React from 'react';
import './ActivationModal.css';

const ActivationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h3>MVision 激活指南</h3>
                    <p>请按照以下步骤完成应用激活</p>
                </div>
                <div className="modal-body">
                    <img src="/assets/activation.png" alt="激活方式" className="activation-img" />
                </div>
            </div>
        </div>
    );
};

export default ActivationModal;
