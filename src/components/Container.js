import React from "react";
import { Parallax } from "react-parallax";
import para1 from "../media/images/para/junction.jpg";
import para2 from "../media/images/para/water.jpg";
const Container = () => {
  const inlineStyle = {
    background: "#fff",
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(110%, 260%)",
  };
  return (
    <div className="App">
      <Parallax blur={1} bgImage={para2} bgImageAlt="the cat" strength={500}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Rainwater Collection Experiment </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Container;
