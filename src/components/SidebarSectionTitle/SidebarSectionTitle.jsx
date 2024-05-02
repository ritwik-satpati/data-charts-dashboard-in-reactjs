import React from "react";

const SidebarSectionTitle = ({
  isActive = true,
  titleId,
  titleName,
  titleIcon,
}) => {
  return (
    <>
      <div
        id={titleId}
        className="flex items-center justify-start space-x-2 font-Poppins font-semibold text-xl"
      >
        <div className="aspect-square">{titleIcon}</div>
        <div className="font-Poppins">{titleName}</div>
      </div>
    </>
  );
};

export default SidebarSectionTitle;
