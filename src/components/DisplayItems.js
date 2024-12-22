import React from 'react';
import './DisplayItems.css';
import DeleteItem from './DeleteItem';

function DisplayItems({ items, onToggleItem, onDeleteItem}) {
    return (
    <div className="display-items">
            <ol>
                {items.map(item => (
                    <li key={item.id} className="shopping-item">
                        <div className="item-content">
                            <label className="item-label">{item.name}</label>
                            <input 
                                type="checkbox" 
                                checked={item.resolved} 
                                onChange={() => onToggleItem(item.id)}
                                className="item-checkbox"
                            />
                            <DeleteItem onDelete={() => onDeleteItem(item.id)} />
                        </div>
                    </li>
                ))}
            </ol>
        </div>



);
}
export default DisplayItems;