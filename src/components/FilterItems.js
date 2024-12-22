import React from 'react';
import './FilterItems.css';

function FilterItems({ filter, setFilter }) {
    return (
        <div className="filter-items">
            <button 
                onClick={() => setFilter('notCompleted')} 
                className={`filter-button ${filter === 'notCompleted' ? 'active' : ''}`}
            >
                Show Not Completed
                {filter === 'notCompleted' && (
                    <span onClick={() => setFilter('all')} className="clear-filter">✕</span>
                )}
            </button>

            <button 
                onClick={() => setFilter('completed')} 
                className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
            >
                Show Completed
                {filter === 'completed' && (
                    <span onClick={() => setFilter('all')} className="clear-filter">✕</span>
                )}
            </button>

            <button 
                onClick={() => setFilter('all')} 
                className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            >
                Show All
            </button>
        </div>
    );
}

export default FilterItems;