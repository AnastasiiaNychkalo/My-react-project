import React from "react";

interface FilterPanelProps {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = ["All", "General", "Work", "Personal", "Study"];

const FilterPanel: React.FC<FilterPanelProps> = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-1 rounded-full border ${
            selected === cat ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterPanel;