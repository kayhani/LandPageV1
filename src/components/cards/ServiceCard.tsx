import React from "react";
import MainButton from "../common/MainButton";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  action?: () => void;
}

function ServiceCard({ iconUrl, title, description, action }: IProps) {
  return (
    <div className="flex flex-grow flex-col gap-[2.56rem]  pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
      <div>
        <img src={iconUrl} alt="service icon" />
      </div>
      <p className="text-[1.75rem] font-[700]">{title}</p>
      <p className="text-normal">{description}</p>
      <MainButton text="Daha Fazla" action={action} classes="w-[10.125rem]" />
      {/* <MainButton text="Learn More" action={action} classes="w-[10.125rem]" /> */}
    </div>
  );
}

export default ServiceCard;
