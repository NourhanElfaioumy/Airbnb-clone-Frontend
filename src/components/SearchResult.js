import { React, useState } from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {useHistory} from 'react-router-dom'
import StarIcon from "@material-ui/icons/Star";
import { Modal, Button } from "react-bootstrap";

function SearchResult({ img, location, title, description, star, price,total,guests,userID,hostID,hostedHomeID,fromDate,toDate}) {
  const [showModal, setShow] = useState(false);
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onsubmit=async(e)=>{
       e.preventDefault();
       await fetch(`http://localhost:9000/user/reserveHome/${hostedHomeID}`,{
           method:"POST",
           body:JSON.stringify({
              hostID:hostID,
              checkIn:fromDate,
              checkOut:toDate,
              no_Of_Guests:guests,
              cost:total
           }),
           headers:{
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token":localStorage.getItem('token')
           }
       }).then(response=>response.json().then((body)=>{
           history.push('/user/trips');
       }))
    

  }
  return (
    <>
      <div className="searchResult">
        <img src={img} alt="" />
        <FavoriteBorderIcon className="searchResult__heart" />

        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <p>{location}</p>
            <div>
              <p className="text-start h3">{title}</p>
            </div>
            <p>____</p>
            <p>{description}</p>
          </div>

          <div className="searchResult__infoBottom">
            <div className="searchResult__stars">
              <StarIcon className="searchResult__star" />
              <p>
                <strong>{star}</strong>
              </p>
            </div>
            <div className="searchResults__price mb-4">
              <h2>{price}</h2>
            </div>
          </div>
          <div>
            <button className="btn btn-secondary w-100" onClick={handleShow}>
              Book
            </button>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you want to reserve {title+" , "+location} with total : {total}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onsubmit}>
            Reserve
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}

export default SearchResult;
