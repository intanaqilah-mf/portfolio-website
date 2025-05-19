import React from 'react';

const WorkFilters = () => {
  const filterItems = [
    { label: 'All', filter: 'all' },
    { label: 'MobileApps', filter: 'mobile' },
    { label: 'Database', filter: 'database' },
    { label: 'UI', filter: 'UI' },
    { label: 'DevOps and Cloud', filter: 'devops' },
    { label: 'Data Analytics, AI and ML', filter: 'aiml' },
  ];

  const handleFilterClick = (filter) => {
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
