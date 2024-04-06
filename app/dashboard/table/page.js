import EventList from "@/app/components/eventlist/eventlist";
import EventOfTheMonthCard from "@/app/components/eventofthemonth/EventOfTheMonthCard";
import StatCard from "@/app/components/statcard/StatCard";
import UpComingEvent from "@/app/components/upcomingevent/upcomingevent";
import React from "react";
import { IoFilter } from "react-icons/io5";

const eventsData = [
  {
    id: 1,
    name: "Web Development",
    time: "12:00AM",
    date: "Thu 2 Nov",
    location: "Bahria Intellectual Village",
    isFavorite: true,
  },
  {
    id: 2,
    name: "Hardware",
    time: "12:00AM",
    date: "Thu 2 Nov",
    location: "Bahria Intellectual Village",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Hardware",
    time: "12:00AM",
    date: "Thu 2 Nov",
    location: "Bahria Intellectual Village",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Hardware",
    time: "12:00AM",
    date: "Thu 2 Nov",
    location: "Bahria Intellectual Village",
    isFavorite: false,
  },
  {
    id: 5,
    name: "Hardware",
    time: "12:00AM",
    date: "Thu 2 Nov",
    location: "Bahria Intellectual Village",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Hardware",
    time: "12:00AM",
    date: "Thu 2 Nov",
    location: "Bahria Intellectual Village",
    isFavorite: false,
  },
];

const upcomingEventsData = [
  eventsData[0],
  eventsData[0],
  eventsData[0],
  eventsData[0],
  eventsData[0],
  eventsData[0],
  eventsData[0],
];

const Table = () => {
  const eventOfTheMonth = {
    name: "Web Development",
    category: "AI",
    date: "Thu 2 Nov 2023",
    time: "12:00AM",
  };
  return (
    <div className="container mx-auto p-3">
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        {/* Event List Section */}
        <div className="w-full lg:w-2/3">
          <div className="flex justify-between mb-2">
            <p className="text-xl font-bold">Events List</p>
            <div className="border p-1 shadow-lg rounded-lg">
              <IoFilter color="#5445bd" className="text-2xl cursor-pointer" />
            </div>
          </div>

          <EventList eventsData={eventsData} maxHeight="max-h-[340px]" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <StatCard number="2.10k" label="All Events" />
            <StatCard number="30" label="This Month's Events" />
            <StatCard number="25" label="Favorite Events" />
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="w-full lg:w-1/3 lg:pl-6">
          <div className="flex justify-between mb-4">
            <p className="text-xl font-bold">Upcoming Events</p>
          </div>

          <div className="relative max-h-80">
            <div className="max-h-80 overflow-y-auto custom-scrollbar">
              <div className="overflow-y-auto">
                {upcomingEventsData.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border mr-3 p-3 mt-3"
                  >
                    <UpComingEvent event={event} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <EventOfTheMonthCard event={eventOfTheMonth} />
        </div>
      </div>
    </div>
  );
};

export default Table;
