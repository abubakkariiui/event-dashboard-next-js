import React from "react";
import { IoHeartOutline } from "react-icons/io5";
const UpComingEvent = ({ event }) => {
  return (
    <div
      key={event.id}
      className="flex items-center justify-between px-2 border-gray-200"
    >
      <div className="text-sm">
        <p className="text-gray-900 font-bold">{event.name}</p>
        <p className="text-gray-400">{`${event.date}, ${event.time}`}</p>
      </div>
      <IoHeartOutline size={24} color="#5445bd" className="cursor-pointer" />
    </div>
  );
};

export default UpComingEvent;
