import React from "react";
import { Parallax } from "react-parallax";
import para1 from "../media/images/para/junction.jpg";
import para2 from "../media/images/para/water.jpg";
const ContainerTwo = () => {
  const inlineStyle = {
    background: "#fff",
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(210%, 300%)",
  };
  return (
    <div className="App">
      <Parallax blur={1} bgImage={para1} bgImageAlt="the cat" strength={500}>
        <div style={{ height: 600 }}>
          <div style={inlineStyle}>Breadbox with housing</div>
        </div>
      </Parallax>
    </div>
  );
};

export default ContainerTwo;
