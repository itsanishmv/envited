import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Context = createContext();
export const AccessState = () => {
  return useContext(Context);
};
function Store({ children }) {
  const [eventName, setEventName] = useState();
  const [hostName, setHostName] = useState();
  const [starts, setStart] = useState();
  const [ends, setEnds] = useState();
  const [photo, setPhoto] = useState([]);
  const [location, setLocation] = useState();

  return (
    <Context.Provider
      value={{
        location,
        setLocation,
        eventName,
        setEventName,
        hostName,
        setHostName,
        starts,
        setStart,
        ends,
        setEnds,
        photo,
        setPhoto,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Store;
