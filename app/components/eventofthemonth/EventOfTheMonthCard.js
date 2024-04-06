import { RxAvatar } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";

const EventOfTheMonthCard = ({ event }) => {
  return (
    <div className="bg-purple-600 rounded-xl shadow-lg overflow-hidden mt-3">
      <div className="relative">
        <div className=" text-white text-lg font-medium p-4 flex items-center justify-between rounded-t-xl">
          <div className="flex flex-col">
            <span>Event of</span>
            <span>The Month</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
              <span className="text-xs">🏆</span>{" "}
            </div>
          </div>
        </div>
        <div className="p-2 bg-white m-2 rounded-2xl">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-purple-700">
              {event.name}
            </h3>
            <div className="flex">
              <RxAvatar size={24} />
              <RxAvatar size={24} />
              <RxAvatar size={24} />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
            <p>Category: {event.category}</p>
            <p>{event.date}</p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
            <p className="flex">
              <CiLocationOn color="purple" size={18} /> Bahria Intellectual
              Village
            </p>
            <p>{event.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOfTheMonthCard;
