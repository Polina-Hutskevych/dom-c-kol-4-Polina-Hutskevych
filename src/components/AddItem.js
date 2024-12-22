import React, { useState } from 'react';
import './AddItem.css';

function AddItem({ onAdd }) {
    const[itemName, setItemName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal  = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleAddItem = () => {
        if (itemName.trim()) {
            onAdd(itemName); 
            setItemName(''); 
            handleCloseModal();
        }
    };

    return (
        <div>
             <button onClick={handleOpenModal} className="add-item-button">➕</button>
             {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add Item</h2>
                        <input 
                            type="text" 
                            value={itemName} 
                            onChange={(e) => setItemName(e.target.value)} 
                            placeholder="Item name" 
                        />
                        <button onClick={handleAddItem}>Add</button>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AddItem;