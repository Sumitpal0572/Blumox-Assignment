import React from "react";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUser,
  FaPlane,
} from "react-icons/fa";

const FlightForm = () => {
  return (
    <div className="bg-[#1f2f3f] p-6 rounded-xl shadow-lg w-full max-w-md">
      <div className="mb-4">
        <label className="text-sm">Round trip</label>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FaPlaneDeparture /> <span>Delhi (DEL)</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPlaneArrival /> <span>London (LHR)</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt /> <span>Mar 20, 2025</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt /> <span>Return Date</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser /> <span>1 Adult, 1 Child</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPlane /> <span>Economy</span>
        </div>
        <div>
          <select className="w-full bg-[#2f2f2f] text-white py-2 px-4 rounded">
            <option>All Airlines</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" /> <span>Direct Flights Only</span>
        </div>
        <button className="bg-white text-black py-2 px-6 rounded-full w-full mt-4">
          Search
        </button>
      </div>
    </div>
  );
};

export default FlightForm;
