import React, { useState, useEffect } from "react";
import EnrolmentRecord from "./EnrolmentRecord";

const UserProfile = (props) => {
  const [enrolments, setEnrolments] = useState([]);
  const [refreshUPPage, setRefreshUPPage] = useState(false);

  const fetchIndex = async () => {
    if (props.isLoggedIn) {
      const fetchURI = "http://localhost:5000/user/" + props.userInfo.id;
      await fetch(fetchURI, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      })
        .then(async (response) => {
          const data = await response.json();
          setEnrolments(data.enrolment);
          console.log("enrolments: ", data.enrolment);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    fetchIndex();
  }, [refreshUPPage]);

  const enrolmentCards = enrolments.map((enrolment, index) => {
    return (
      <div className="col-sm-3" key={index}>
        <EnrolmentRecord
          enrolment={enrolment}
          index={index}
          isLoggedIn={props.isLoggedIn}
          userInfo={props.userInfo}
          refreshUPPage={refreshUPPage}
          setRefreshUPPage={setRefreshUPPage}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <h1 className="mt-5 mb-5">Enrolled workshops</h1>
      <div className="row">{enrolmentCards}</div>
    </div>
  );
};

export default UserProfile;
