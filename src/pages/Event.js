import React, { useState, useEffect } from "react";
import { BsCalendar } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AccessState, accessState } from "../Store";
import { useNavigate } from "react-router-dom";
function Event() {
  const navigate = useNavigate();
  const { eventName, hostName, starts, ends, photo, location } = AccessState();

  return (
    <div>
      <section>
        <img src={photo} alt="img" />
      </section>

      <section className="px-[20px]">
        <h2 className="font-[700] text-[1.75rem] text-[#240D57]">
          {eventName}
        </h2>
        <span className="font-[400] text-[0.875rem] text-[#828282]">
          Hosted by
          <span className="font-[600] text-[15px] text-[#828282]">
            {hostName}
          </span>
        </span>
        <div className="flex flex-col mt-[37.5px] gap-[16px]">
          <div className="flex items-center gap-[34.5px]">
            <div className="rounded-[10px] object-contain h-[48px] w-[48px] border-2 flex justify-center items-center">
              <BsCalendar className="text-[#8456EC]" />
            </div>
            <div>
              <h4 className="font-[700] text-[16px] text-[#240D57]">
                {starts}
              </h4>
              <h3>
                to{" "}
                <span className="font-[600] text-[15px] text-[#4F4F4F]">
                  {ends}
                </span>
                UTC +10
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-[34.5px]">
            <div className="rounded-[10px] object-contain h-[48px] w-[48px] border-2 flex justify-center items-center">
              <GoLocation className="text-[#8456EC]" />
            </div>
            <div>
              <h4 className="font-[700] text-[16px] text-[#240D57]">
                Street name
              </h4>
              {location}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event;
