import React, { useEffect, useState } from 'react';
import { mockServer } from './MockServer'; // Import mockServer
import ShoppingListOverview from './ShoppingListOverview';
import ShoppingList from './ShoppingList';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [shoppingLists, setShoppingLists] = useState([]);

  useEffect(() => {
    const savedShoppingLists = JSON.parse(localStorage.getItem('shoppingLists'));
    if (savedShoppingLists) {
      setShoppingLists(savedShoppingLists);
    } else {
      mockServer.getShoppingLists().then((lists) => {
        setShoppingLists(lists);
        localStorage.setItem('shoppingLists', JSON.stringify(lists)); 
      });
    }
  }, []);

  const handleAddShoppingList = (title) => {
    mockServer.addShoppingList(title).then((newList) => {
      const updatedLists = [...shoppingLists, newList]; 
      setShoppingLists(updatedLists); 
      localStorage.setItem('shoppingLists', JSON.stringify(updatedLists)); 
    });
  };

  const handleDeleteShoppingList = (id) => {
    mockServer.deleteShoppingList(id).then(() => {
      const updatedLists = shoppingLists.filter((list) => list.id !== id);
      setShoppingLists(updatedLists);
      localStorage.setItem('shoppingLists', JSON.stringify(updatedLists));
    });
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ShoppingListOverview
                shoppingLists={shoppingLists}
                onAdd={handleAddShoppingList}
                onDelete={handleDeleteShoppingList}
              />
            }
          />
          <Route path="/shopping-list/:id" element={<ShoppingList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;