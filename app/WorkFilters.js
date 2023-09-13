import React from 'react';

const WorkFilters = () => {
  const filterItems = [
    { label: 'All', filter: 'all' },
    { label: 'Website', filter: 'web' },
    { label: 'UI', filter: 'UI' },
    { label: 'Database', filter: 'database' },
  ];

  const handleFilterClick = (filter) => {
    // Implement the filter functionality here
    // For example, you can set the active filter in the component's state
    // or pass it to a parent component to handle filtering logic.
    console.log(`Filter clicked: ${filter}`);
  };

  return (
    <div className="work_filters flex justify-center items-center gap-3 mb-8">
      {filterItems.map((item, index) => (
        <span
          key={index}
          className={`work_item cursor-pointer ${
            index === 0 ? 'active-work' : ''
          }`}
          onClick={() => handleFilterClick(item.filter)}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default WorkFilters;
