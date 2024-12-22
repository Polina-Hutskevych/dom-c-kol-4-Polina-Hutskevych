import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingListOverview.css';
import DeleteShoppingList from './DeleteShoppingList';
import AddShoppingList from './AddShoppingList';

function ShoppingListOverview({ shoppingLists, onAdd, onDelete }) {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState(null);

  const openDeleteModal = (list) => {
    setSelectedList(list);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedList(null);
  };

  const openAddModal = () => {
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  return (
    <div className="shopping-lists-overview">
      <h1 className="shopping-list-title">My Shopping Lists</h1>
      <button className="add-list-button" onClick={openAddModal}>
        Add Shopping List
      </button>
      <div className="shopping-list-container">
        {shoppingLists.map((list) => (
          <div key={list.id} className="shopping-list-item">
            <Link to={`/shopping-list/${list.id}`}>
              <h2>{list.title}</h2>
            </Link>
            <button
              onClick={() => openDeleteModal(list)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {isDeleteModalOpen && (
        <DeleteShoppingList
          onClose={closeDeleteModal}
          onDelete={() => onDelete(selectedList.id)} // Delete list using mock data
          listTitle={selectedList.title}
        />
      )}

      {isAddModalOpen && (
        <AddShoppingList
          onClose={closeAddModal}
          onAdd={onAdd} // Add list using mock data
        />
      )}
    </div>
  );
}

export default ShoppingListOverview;