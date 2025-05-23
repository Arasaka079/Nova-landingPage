import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

export default function ServicesCard({ icon, bgColor, colorShade, textColor, title, description }) {
  return (
    <li className="group rounded-xl shadow-value-card relative flex flex-col items-start gap-4 px-6 py-8 overflow-hidden text-left bg-white cursor-pointer">
      <div className={`${bgColor} absolute top-0 bottom-0 left-0 w-1.5`}></div>
      <div className={`${colorShade} flex items-center justify-center w-12 h-12 p-2 rounded-lg shadow-sm`}>{icon}</div>
      <h4 className="text-heading font-nunito text-xl font-bold">{title}</h4>
      <p className="text-cuGray text-base">{description}</p>
      <div className={`flex items-center gap-2 mt-1 font-bold ${textColor}`}>
        <a href="#">Learn more</a>
        <HiArrowRight size={20} />
      </div>
    </li>
  );
}
