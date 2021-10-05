import React from "react";
/*
In userProfile,
  enrolment: {
      id: updatedWorkshopInfo._id,
      category: updatedWorkshopInfo.category,
      title: updatedWorkshopInfo.title,
      dateStart: updatedWorkshopInfo.dateStart,
      courseStartTime: updatedWorkshopInfo.courseStartTime,
      courseEndTime: updatedWorkshopInfo.courseEndTime,
  }
In workshopProfile,
  participantList: {
      id: props.userInfo.id,
      firstName: props.userInfo.firstName,
      lastName: props.userInfo.lastName,
      email: props.userInfo.email,
  }
*/

const WorkshopProfile = (props) => {
  const handleRegister = (e) => {
    e.preventDefault();
    if (!props.isLoggedIn) alert("Please log in or create an account.");
    if (props.workshop.vacancies === 0) alert("No vacancies left");
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    let btnId = "close-modal-btn" + props.index;
    let myModal = document.getElementById(btnId);
    myModal.click();

    await fetch("http://localhost:5000/iwan", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        userId: props.userInfo.id,
        workshopId: props.workshop._id,
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (data.status !== "ok") {
          console.log("iwan failed: ", data.msg);
          alert(data.msg);
          return Promise.reject("iwan failed");
        }
        console.log("iwan ok? ", data.msg);
        props.setRefreshWSPage(!props.refreshWSPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="card bg-light text-dark">
        <img
          src={props.imageURL}
          className="card-img-top"
          alt="workshop logo"
        />
        <div className="card-body">
          <h5 className="card-title">{props.workshop.title}</h5>
          <p className="card-text">Type: "{props.workshop.category}"</p>
          <p className="card-text">{props.workshop.description}</p>
          <p className="card-text">{props.workshop.dateStart}</p>
          <p className="card-text">
            {props.workshop.courseStartTime}-{props.workshop.courseEndTime}
          </p>
          <p>Location: {props.workshop.location}</p>
          <p>
            Vacancies: <b>{props.workshop.vacancies}</b>
          </p>
          <button
            type="button"
            id={"register-btn" + props.index}
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#modal" + props.index}
            onClick={handleRegister}
            disabled={!props.isLoggedIn || props.workshop.vacancies === 0}
          >
            Register
          </button>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id={"modal" + props.index}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                You are registering for:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>{props.workshop.title}</h5>
              <p>{props.workshop.description}</p>
              <p>{props.workshop.dateStart}</p>
              <p>
                {props.workshop.courseStartTime}-{props.workshop.courseEndTime}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id={"close-modal-btn" + props.index}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkshopProfile;
