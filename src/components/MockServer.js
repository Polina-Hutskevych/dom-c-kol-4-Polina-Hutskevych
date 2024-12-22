const mockData = {
  shoppingLists: [
    { id: '1', title: 'Groceries' },
    { id: '2', title: 'Party Supplies' },
  ],
  items: {
    1: [{ id: '1', name: 'Milk' }, { id: '2', name: 'Eggs' }],
    2: [{ id: '3', name: 'Cups' }, { id: '4', name: 'Plates' }],
  },
};

export const mockServer = {
  getShoppingLists: () =>
    new Promise((resolve) => setTimeout(() => resolve(mockData.shoppingLists), 500)),

  addShoppingList: (title) =>
    new Promise((resolve) => {
      const newList = { id: Date.now().toString(), title };
      mockData.shoppingLists.push(newList);
      setTimeout(() => resolve(newList), 500);
    }),

  deleteShoppingList: (id) =>
    new Promise((resolve) => {
      mockData.shoppingLists = mockData.shoppingLists.filter((list) => list.id !== id);
      setTimeout(() => resolve({ id }), 500);
    }),

  getItems: (listId) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(mockData.items[listId] || []), 500)
    ),

  addItem: (listId, name) =>
    new Promise((resolve) => {
      const newItem = { id: Date.now().toString(), name };
      if (!mockData.items[listId]) mockData.items[listId] = [];
      mockData.items[listId].push(newItem);
      setTimeout(() => resolve(newItem), 500);
    }),
};


