import { React, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Modal, Button } from "react-bootstrap";
function UserData({ user }) {
  const [showEditModal, isEditOpen] = useState(false);
  const [showDelModal, isDelOpen] = useState(false);
  const [emailchange, email] = useState(user.email);
  const [firstNamechange, firstname] = useState(user.firstName);
  const [lastNamechange, lastname] = useState(user.lastName);
  const [phoneChange, phonenumber] = useState(user.phoneNumber);
  const [regionChange, region] = useState(user.region);
  const openEditModal = () => isEditOpen(true);
  const closeEditModal = () => isEditOpen(false);
  const openDelModal = () => isDelOpen(true);
  const closeDelModal = () => isDelOpen(false);
  function handleEmailChange(event) {
    email(event.target.value);
  }
  function handleFirstnameChange(event) {
    firstname(event.target.value);
  }
  function handleLastnameChange(event) {
    lastname(event.target.value);
  }
  function handlePhoneChange(event) {
    phonenumber(event.target.value);
  }
  function handleRegionChange(event) {
    region(event.target.value);
  }
  return (
    <>
      <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.region}</td>
        <td>
          <button
            className="btn btn-primary"
            style={{ border: "none" }}
            onClick={openEditModal}
          >
            <EditIcon />
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            style={{ border: "none" }}
            onClick={openDelModal}
          >
            <DeleteIcon />
          </button>
        </td>
      </tr>
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" value={emailchange} onChange={handleEmailChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstname">FirstName</label>
                <input type="text" className="form-control" id="firstname" placeholder="First name" value={firstNamechange} onChange={handleFirstnameChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastname">LastName</label>
                <input type="text" class="form-control" id="lastname" placeholder="Last name" value={lastNamechange} onChange={handleLastnameChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="phonenumber">phoneNumber</label>
                <input type="text" className="form-control" id="phonenumber" placeholder="Phone number" value={phoneChange} onChange={handlePhoneChange}/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="region">Region</label>
                <input type="text" class="form-control" id="region" placeholder="Region" value={regionChange} onChange={handleRegionChange}/>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={async () => {
            await fetch("https://tranquil-sands-93018.herokuapp.com/admin/users/" + user._id, {
              method: "PUT",
              body:JSON.stringify({
                email:emailchange,
                firstName:firstNamechange,
                lastName:lastNamechange,
                phoneNumber:phoneChange,
                region: regionChange
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              }
            }).then(response =>{
              window.location.reload()
            })
          }}>
            Save
          </Button>
          <Button variant="secondary" onClick={closeEditModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDelModal} onHide={closeDelModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {user.firstName + " " + user.lastName} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={async () => {
            await fetch("https://tranquil-sands-93018.herokuapp.com/admin/users/" + user._id, {
              method: "DELETE",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              }
            }).then(body => {
              window.location.reload()
            })
          }}>
            Delete
          </Button>
          <Button variant="secondary" onClick={closeDelModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserData;
