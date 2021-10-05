import React from "react";
import fb from "../media/images/fb.jpg";
import ig from "../media/images/ig.jpg";

const Footer = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center text-center">
        <br></br>
        <br></br>
        <hr></hr>
        <div className="col-md-3  mb-5">&#169;Mycorr, 2021</div>

        <div className="col-md-3  mb-5">
          <h6>Email</h6>
          <a href="mailto:mycorr.sg@gmail.com" className="text-decoration-none">
            mycorr.sg@gmail.com
          </a>
        </div>
        <div className="col-md-3  mb-5">
          <h6>Whatsapp</h6>
          <h6>+65 XXXX-XXXX</h6>
        </div>

        <div className="col-md-3 mb-5">
          <a
            href="https://www.facebook.com/mycorrsg"
            rel="noreferrer"
            target="_blank"
          >
            <img src={fb} className="rounded" alt="1" height="35px" />
          </a>
          <a
            href="https://www.instagram.com/mycorrsg/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={ig} className="rounded" alt="1" height="45px" />
          </a>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Footer;
