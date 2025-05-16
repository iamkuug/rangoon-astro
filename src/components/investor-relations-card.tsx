import React from "react";

export const InvestorRelationsCard = ({
  backgroundImage,
  icon,
  text,
  bgColor = "bg-brand-secondary", // Default background color
}) => {
  return (
    <div
      className={` group relative w-full h-64 rounded-3xl overflow-hidden flex items-center justify-center max-h-[200px] cursor-pointer   px-10 py-5 ${
        backgroundImage ? "" : bgColor
      }`}
    >
      <div className="absolute inset-0 bg-brand-secondary opacity-50 z-10"/>
      <img
        src={backgroundImage}
        className="group-hover:scale-110  transition-all ease-in-out absolute w-full h-full object-cover "
        alt=""
      />

      <div className="relative z-10 w-full h-full  text-white ">
        {icon && <div className="text-5xl absolute top-0 right-0">{icon}</div>}
        {text && (
          <p className="text-xl font-semibold absolute bottom-0 left-0 w-32">{text}</p>
        )}
      </div>
    </div>
  );
};
