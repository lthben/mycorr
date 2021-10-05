import React from "react";

const WorkshopRegistration = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // console.log("props: ", props.workshop);

  return (
    <div className="border border-dark" id="registration-box">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <h3>You are registering for:</h3>
        </div>
        <div className="mb-3">
          <h5>{props.workshop.title}</h5>
          <p>{props.workshop.description}</p>
          <p>{props.workshop.dateStart}</p>
          <p>
            {props.workshop.courseStartTime}-{props.workshop.courseEndTime}
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default WorkshopRegistration;
