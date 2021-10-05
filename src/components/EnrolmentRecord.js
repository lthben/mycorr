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
const EnrolmentRecord = (props) => {
  const handleConfirm = async (e) => {
    e.preventDefault();

    let btnId = "close-modal-btn" + props.index;
    let myModal = document.getElementById(btnId);
    myModal.click();

    await fetch("http://localhost:5000/dowan", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        userId: props.userInfo.id,
        workshopId: props.enrolment.id,
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (data.status !== "ok") {
          console.log("dowan failed: ", data.status);
          alert("dowan failed");
          return Promise.reject("dowan failed");
        }
        console.log("dowan ok? ", data.msg);
        props.setRefreshUPPage(!props.refreshUPPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.enrolment.title}</h5>
          <p className="card-text">Type: "{props.enrolment.category}"</p>
          <p className="card-text">{props.enrolment.dateStart}</p>
          <p className="card-text">
            {props.enrolment.courseStartTime}-{props.enrolment.courseEndTime}
          </p>
          <button
            type="button"
            id={"withdraw-btn" + props.index}
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#modal" + props.index}
          >
            Withdraw
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
                You are withdrawing for:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>{props.enrolment.title}</h5>
              <p>{props.enrolment.dateStart}</p>
              <p>
                {props.enrolment.courseStartTime}-
                {props.enrolment.courseEndTime}
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

export default EnrolmentRecord;
