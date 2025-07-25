import React from "react";

interface DirectorProfileCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

export const DirectorProfileCard = ({
  image,
  name,
  role,
  bio,
}: DirectorProfileCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8  mb-10 w-full">
      <div className="w-full md:w-auto md:h-60 md:overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full md:w-64 aspect-square md:aspect-auto object-cover"
          loading="lazy"
        />
      </div>
      <div className="md:h-60 md:w-1/6 flex flex-col pt-8">
        <h2 className="text-xl md:text-xl font-semibold text-brand-primary mb-1">
          {name}
        </h2>
        <p className="text-gray-600 mb-4">{role}</p>
      </div>
      <div className="w-full md:flex-1 md:max-w-3xl md:h-60 flex-1">
        <div className="md:bg-white md:p-6 md:rounded-lg ">
          <div className="text-gray-700 leading-relaxed md:font-[.01px]">{bio}</div>
        </div>
      </div>
    </div>
  );
};
