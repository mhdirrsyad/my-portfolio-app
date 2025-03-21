import React from "react";

const CategoryChip = ({ category }) => {
  return (
    <div className="px-3 h-7 md:h-8 flex justify-center items-center max-w-max w-full border-1 border-border-theme rounded-full">
      <p className="text-category leading-category text-inactive-theme font-fira-sans">
        {category}
      </p>
    </div>
  );
};

export default CategoryChip;
