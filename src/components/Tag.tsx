import React from "react";

interface TagProps {
  label: string;
  custom?: string;
}

const Tag: React.FC<TagProps> = ({ label, custom = "bg-blue-500" }) => {
  return (
    <span className={`inline-block px-3 py-1 mr-2 mb-2 text-xs font-semibold text-white rounded-full ${custom}`}>
      {label}
    </span>
  );
};

export default Tag;
