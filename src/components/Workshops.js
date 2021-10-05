import React, { useState, useEffect } from "react";
import WorkshopProfile from "./WorkshopProfile";
import makecodeIm from "../media/images/makecode-logo.png";
import scratchIm from "../media/images/scratch-logo.png";
import breadboardIm from "../media/images/breadboard-logo.png";
import microbitIm from "../media/images/microbit-logo.jpeg";

const Workshops = (props) => {
  const [workshops, setWorkshops] = useState([]);
  const [refreshWSPage, setRefreshWSPage] = useState(false);
  const imageURLs = [scratchIm, breadboardIm, makecodeIm, microbitIm];

  const fetchIndex = async () => {
    await fetch("http://localhost:5000/wsindex", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then(async (response) => {
        const data = await response.json();
        // console.log("workshops: ", data);
        setWorkshops(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchIndex();
  }, [refreshWSPage]);

  const workshopCards = workshops.map((workshop, index) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" key={index}>
        <WorkshopProfile
          workshop={workshop}
          imageURL={imageURLs[index]}
          index={index}
          isLoggedIn={props.isLoggedIn}
          userInfo={props.userInfo}
          refreshWSPage={refreshWSPage}
          setRefreshWSPage={setRefreshWSPage}
        />
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <h1 className="mt-5 mb-5">Workshops</h1>
        <div className="row">{workshopCards}</div>
      </div>
    </div>
  );
};

export default Workshops;
