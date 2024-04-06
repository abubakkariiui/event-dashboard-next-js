import EventList from "@/app/components/eventlist/eventlist";
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
  {
    id: 6,
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

const Favourite = () => {
  return (
    <div className="max-h-10 px-6">
      <div className="flex justify-between mb-4">
        <p className="text-xl font-semibold">Favourite Events</p>
        <div className="border p-1 shadow-lg rounded-lg">
          <IoFilter color="#5445bd" className="text-2xl cursor-pointer" />
        </div>
      </div>
      <EventList eventsData={eventsData} maxHeight="max-h-[510px]" />
    </div>
  );
};

export default Favourite;
