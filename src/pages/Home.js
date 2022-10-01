import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F6F2FF] h-[100vh] flex justify-center ">
      <section className="flex flex-col items-center gap-[36px]">
        <div className="flex flex-col items-center mt-10 px-[46px] gap-[16px]">
          <h1 className=" font-[700] font-['Helvetica'] text-[2.25rem] leading-9 w-[75%] text-center text-[#240D57]">
            Imagine if{" "}
            <span className="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Snapchat
            </span>{" "}
            had Events.
          </h1>
          <h4 className="text-center font-[300] font-['Helvetica'] text-[1rem]">
            Easily host and share events with your friends across any social
            media.
          </h4>
        </div>
        <div>
          <img
            className="w-[167px] h-[292px] object-contain "
            src="Landing page image.svg"
            alt=""
          />
        </div>
        <button
          onClick={() => navigate("/create")}
          className="text-[white] bg-[purple] h-[50px] w-[187px] rounded-[10px] font-[700] text-[16px]"
        >
          Create my event
        </button>
      </section>
    </div>
  );
}

export default Home;
