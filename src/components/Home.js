import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import pic1 from "../media/images/mycorr.jpg";
import pic2 from "../media/images/mycorr(2).jpg";
import pic3 from "../media/images/mycorr(3).jpg";
import pic4 from "../media/images/mycorr(4).jpg";
import pic5 from "../media/images/mycorr(5).jpg";
import Container from "./Container";
import ContainerTwo from "./Container2";
// import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <ContainerTwo />
      {/* carousel codes below >>> */}
      {/* <div className="container">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={pic1} class="d-block w-20" alt="1" />
            </div>
            <div class="carousel-item">
              <img src={pic2} class="d-block w-20" alt="2" />
            </div>
            <div class="carousel-item">
              <img src={pic3} class="d-block w-20" alt="3" />
            </div>
            <div class="carousel-item">
              <img src={pic4} class="d-block w-20" alt="4" />
            </div>
            <div class="carousel-item">
              <img src={pic5} class="d-block w-20" alt="5" />
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}

      {/* carousel codes^^^ */}
      {/* ////older picture display format, not in use because Evans managed to get the carousel to work */}
      {/* <div className="row">
      //   <div className="col-sm">
      //     <img src={pic1} alt="Pic1" width="320" height="240" />
      //   </div>
      //   <div className="col-sm">
      //     <div className="col-sm">
      //       <img src={pic2} alt="Pic1" width="320" height="240" />
      //     </div>
      //   </div>
      //   <div className="col-sm">
      //     <div className="col-sm">
      //       <img src={pic3} alt="Pic1" width="320" height="240" />
      //     </div>
      //   </div>
      // </div> */}
      {/* line break codes to give spacing */}

      {/* main header div */}

      <div className="container">
        <br></br>
        <br></br>

        <h3> An online STEM Learning Provider</h3>
      </div>
      <br></br>
      <br></br>
      {/* columned text */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-3 lh-lg">
            <h4>About Us</h4>
            <br />

            <p>
              We are an online STEM education service provider, teaching
              electronics and coding through hands-on practice and fun
              educational kits.
            </p>
            <p>
              Our logo shows the shape of plant roots using a printed circuit
              board pattern, reflecting our philosophy of empowering the younger
              generation with knowledge and confidence through a strong
              foundation in STEM skills.
            </p>
          </div>

          <div className="col-lg-6 mb-3  lh-lg">
            <h4>Subjects & Pedagogy</h4>
            <br />

            <p>
              We research on the latest edtech platforms to bring you an
              engaging and unforgettable experience in learning how to create
              apps and electronics prototypes, while addressing real world
              context and stories about sustainability.{" "}
            </p>
            <p>
              For Primary school level, we focus on breadboard electronics and
              the Scratch programming platform for younger children. For
              Secondary school level, we use the BBC micro:bit microcontroller
              paired with Microsoft Makecode to teach electronics and
              programming.
            </p>
          </div>
        </div>
      </div>

      {/* class description section */}
      {/* <div className="container">
        <div className="row">
        
        </div>
      </div> */}
      <br></br>

      <br></br>

      <Container />

      <br></br>

      {/* button code */}
      <br />
      {/* bottom information box HTML code */}

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Testimonials</h1>
          <br></br>
          <blockquote className="blockquote">
            <p className="lh-lg mb-5">
              “It was insightful and interesting how technology can be used to
              monitor the moisture and amount of sunlight for the indoor plant
              kit workshop. Overall, a very special programme.”
              <b>- Kay Tan, 11 years old</b>
            </p>
            <p className="lh-lg mb-5">
              “I liked learning about fossil fuels and assembling the solar jar
              electronic circuit. We had a great teacher.” -{" "}
              <b>Ashton Ang, 7 years old</b>
            </p>
            <p className="lh-lg mb-5">
              “What was memorable about the Water Future workshop was learning
              how precious water is and creating the fun water droplet game on
              Scratch.” - <b>Marene Ng, 10 years old</b>
            </p>
          </blockquote>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Home;
