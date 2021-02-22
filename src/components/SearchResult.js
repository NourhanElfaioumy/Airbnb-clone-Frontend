import { React, useState } from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {useHistory} from 'react-router-dom'
import StarIcon from "@material-ui/icons/Star";
import { Modal, Button } from "react-bootstrap";

function SearchResult({ imgs, location, title, description, star, price,total,guests,userID,hostID,hostedHomeID,fromDate,toDate}) {
  const [showModal, setShow] = useState(false);
  const [imgSRC,showImg]= useState(`https://tranquil-sands-93018.herokuapp.com/${imgs[0].filename}`);
  let x =0;
  const myInterval=0;
  const srcs=[]
  imgs.forEach(i => {
    srcs.push(i.filename)
  });
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onsubmit=async(e)=>{
       e.preventDefault();
       await fetch(`https://tranquil-sands-93018.herokuapp.com/user/reserveHome/${hostedHomeID}`,{
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
  console.log(srcs)
  return (
    <>
      <div className="searchResult">
      <div className="slideshow-container">

<div className="mySlides">
  <img src={imgSRC} alt='' className="img"/>
</div>
<a className="prev" onClick={()=>{if(x>0){showImg(`https://tranquil-sands-93018.herokuapp.com/${srcs[--x]}`)}}}>&#10094;</a>
<a className="next" onClick={()=>{if(x<srcs.length-1 && x!==srcs.length-1){showImg(`https://tranquil-sands-93018.herokuapp.com/${srcs[++x]}`)}else{showImg(`https://tranquil-sands-93018.herokuapp.com/${srcs[--x]}`)}}}>&#10095;</a>

</div>
      {/* <div >
                <a onClick={()=>{if(x>0){showImg(`http://localhost:9000/${srcs[--x]}`)}}} className="mt-5 pt-5" s>&#10094;</a>
                <img className='img' src={imgSRC} alt=''/>
                <a onClick={()=>{if(x<srcs.length-1){showImg(`http://localhost:9000/${srcs[++x]}`)}}} className="mt-5 pt-5">&#10095;</a>
       </div> */}
        {/* <img src={`http://localhost:9000/${imgs[0].filename}`} alt="" /> */}
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
          <div style={{width:"700px"}} className="justify-content-center">
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
