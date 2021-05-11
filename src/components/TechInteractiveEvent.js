import React, { useState } from "react";
import "./modal.css";

function TechInteractiveEvent(props) {
const [showMore, setShowMore] = useState(true);
  const { name: heading, location: info, startDate, endDate, description, offers } = props.data;
   
  if (!props.show) {
    return null;
  }

  function showWords(count) {
    let words = "";
    let desc = props.data.description.split(" ");
    for(let i = 0; i < count; i++) {
      words += desc[i] + " ";
    }
    return (words + "...");
  }
 
  function getDate(date) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let [month, day] = new Date(date).toLocaleDateString("en-US").split("/");
    let dates = `${months[month - 1]} ${day}`;
    return dates;
  }

  function getTime(date) {
    let time = new Date(date);
    time = time.toLocaleTimeString();
    return time;
  }
  return (
    <>
    <div className="modal">
      <span className="button-x" onClick={props.onClose}>
        X
      </span>
      <div className="event-image">
        <hgroup className="image-header">
          <h3 className="event-name">{info.name}, San Jose</h3>
          <h1>{heading}</h1>
        </hgroup>
      </div>
          <section className="event-content">
            <div className="date-time">
              <h3>Date &amp; Time</h3>
              <p>{getDate(startDate)}</p>
              <p>{getTime(startDate)} - {getTime(endDate)}</p>
            </div>
            <div className="description">
              <h3>Description</h3>
              <p>{showMore ? showWords(8): description}</p>
              <p className="read-more" onClick={() => {
                   showMore ? setShowMore(false): setShowMore(true)
                }}>{showMore ? "Read More" : "Read Less"}</p>
            </div>
            <div className="location">
              <h3>Location</h3>
              <p>{info.name}</p>
              <p>{info.address.streetAddress}</p>
              <p>{`${info.address.addressLocality}, ${info.address.addressRegion} ${info.address.postalCode}`}</p>
            </div>
          </section>
          <div className="external-link">
            <a href={offers.url}><span>RSVP</span></a>
          </div>
    </div>
    </>
  )
};

export default TechInteractiveEvent;