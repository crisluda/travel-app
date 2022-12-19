import React from "react";
import locationLogo from "../assets/image/Path.png";
import mountLogo from "../assets/image/Rectangle77.png";

function Card(props) {
  console.log(props.item.imageUrl);
  return (
    <>
      <div className="main-body">
        <img src={props.item.imageUrl} alt="" srcset="" />
        <div className="main-body-1">
          <img src={locationLogo} alt="" srcset="" />
          <span className="main-body-span-1">{props.item.location}</span>
          <span className="main-body-span-2">
            <a
              href={props.item.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </span>
          <h2>{props.item.title}</h2>
          <h5>
            {props.item.startDate} - {props.item.endDate}
          </h5>
          <h6>{props.item.description}</h6>
        </div>
      </div>
      <div className="main-body-line"></div>
    </>
  );
}

export default Card;
