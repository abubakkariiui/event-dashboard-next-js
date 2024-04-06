import React from "react";
import { IoHeartOutline } from "react-icons/io5";

const EventList = ({ eventsData, maxHeight }) => {
  return (
    <div>
      <div className="flex uppercase border-b border-b-slate-950 p-2 mb-3">
        <span className="w-1/12 font-bold text-gray-900">#</span>
        <span className="w-3/12 font-bold px-4 text-gray-900">Name</span>
        <span className="w-2/12 font-bold px-4 text-gray-900">Time</span>
        <span className="w-2/12 font-bold px-4 text-gray-900">Date</span>
        <span className="w-4/12 font-bold px-4 text-gray-900">Location</span>
      </div>
      <div className={`overflow-y-auto custom-scrollbar ${maxHeight}`}>
        <div className="">
          <ul className="mr-3">
            {eventsData.map((event, index) => (
              <li
                key={event.id}
                className="border mb-3 flex rounded-2xl items-center px-6 py-4 hover:bg-gray-50"
              >
                <span className="w-1/12 text-gray-900 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="w-3/12 px-4 py-2">{event.name}</span>
                <span className="w-2/12 px-4 py-2">{event.time}</span>
                <span className="w-2/12 px-4 py-2">{event.date}</span>
                <span className="w-4/12 px-4 py-2">{event.location}</span>
                <span className="w-0/12 py-2">
                  <IoHeartOutline color="#5445bd" size={24} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventList;
