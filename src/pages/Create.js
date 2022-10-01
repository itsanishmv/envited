import React, { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { AccessState } from "../Store";
import { useNavigate } from "react-router-dom";
function Create() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const {
    setEventName,

    setHostName,

    setStart,

    setEnds,

    setPhoto,
    setLocation,
  } = AccessState();

  function uploadPhoto(e) {
    setPhoto(URL.createObjectURL(e.target?.files[0]));
  }

  return (
    <div className="flex  flex-col gap-[16px] mt-[34px] p-[24px]">
      {error}
      <h1 className="font-[700] text-[1.75rem] text-[#240D57]">
        Create your event
      </h1>
      <form action="">
        <div className=" flex  justify-center items-center flex-col">
          <label
            className="rounded-[10px] h-[150px] text-center flex justify-center flex-col w-[100%] bg-[url('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T113033Z&X-Amz-Expires=86400&X-Amz-Signature=d4fb13e19f3cefe09ad3638cdcb128234982a8f7bbed9dc3ae35f691891c7baf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject')] "
            htmlFor="upload"
          >
            <div className="flex justify-center">
              <MdAddAPhoto className="h-[46px] w-[46px] text-[#FBFAFF]" />
            </div>

            <h1 className="font-[700] text-[24px] text-[#FBFAFF]">
              Choose a photo
            </h1>
          </label>
          <input
            required
            onChange={uploadPhoto}
            className=" z-[-1] absolute opacity-0"
            type="file"
            id="upload"
            accept="image/*"
          />
        </div>

        <div>
          <span className="font-[600] text-[15px] font-[Helvetica]">
            🎉 My event name
          </span>
          <input
            // value={storeInput.eventName}
            required
            className="rounded-[10px] bg-[#EDE5FF] w-[100%] p-[10px] text-[15px] font-[600] outline-none"
            placeholder="event name"
            type="text"
            onChange={(e) => setEventName(e.target.value)}
            name="event"
          />
        </div>
        <div>
          <span className="font-[600] text-[15px] font-[Helvetica]">
            👫 Host name
          </span>
          <input
            required
            className="rounded-[10px] bg-[#EDE5FF] w-[100%] p-[10px] text-[15px] font-[600] outline-none"
            placeholder="Host name"
            type="text"
            onChange={(e) => setHostName(e.target.value)}
            name="host"
          />
        </div>
        <div>
          <span className="font-[600] text-[15px] font-[Helvetica]">
            📅 Starts at
          </span>
          <input
            required
            className="rounded-[10px] bg-[#EDE5FF] w-[100%] p-[10px] text-[15px] font-[600] outline-none"
            placeholder="Starts at"
            type="text"
            onChange={(e) => setStart(e.target.value)}
            name="start"
          />
        </div>
        <div>
          <span className="font-[600] text-[15px] font-[Helvetica]">
            😥 Ends at
          </span>
          <input
            required
            className="rounded-[10px] bg-[#EDE5FF] w-[100%] p-[10px] text-[15px] font-[600] outline-none"
            placeholder="Ends at"
            type="text"
            onChange={(e) => setEnds(e.target.value)}
            name="end"
          />
        </div>
        <div>
          <span className="font-[600] text-[15px] font-[Helvetica]">
            🗺 location
          </span>
          <input
            required
            className="rounded-[10px] bg-[#EDE5FF] w-[100%] p-[10px] text-[15px] font-[600] outline-none"
            placeholder="Location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            name="end"
          />
        </div>
        <button
          className="text-[white] bg-[purple] h-[50px] w-[187px] rounded-[10px] font-[700] text-[16px] mt-[15px]"
          type="submit"
          onClick={() => navigate("/event")}
        >
          NEXT
        </button>
      </form>
    </div>
  );
}

export default Create;
