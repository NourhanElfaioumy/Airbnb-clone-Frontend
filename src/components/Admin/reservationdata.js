import { React, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Modal, Button } from "react-bootstrap";
import * as moment from 'moment';
function ReservationData({ reservation }) {
    var checkin = moment(reservation.checkIn).format('YYYY-MM-DD');
    var checkout = moment(reservation.checkOut).format('YYYY-MM-DD');
    const [showEditModal, isEditOpen] = useState(false);
    const [checkinchange, datein] = useState(checkin);
    const [checkoutchange, dateout] = useState(checkout);
    const [costchange, cost] = useState(reservation.cost);
    const [guestChange, guest] = useState(reservation.no_Of_Guests);
    const openEditModal = () => isEditOpen(true);
    const closeEditModal = () => isEditOpen(false);
    function handleCheckinChange(event) {
        datein(event.target.value);
    }
    function handleCheckoutChange(event) {
        dateout(event.target.value);
    }
    function handleCostChange(event) {
        cost(event.target.value);
    }
    function handleGuestsChange(event) {
        guest(event.target.value);
    }
    console.log(checkinchange)
    return (
        <>
            <tr>
                <td>{checkin}</td>
                <td>{checkout}</td>
                <td>{reservation.cost} EGP</td>
                <td>{reservation.no_Of_Guests}</td>
                <td>
                    <button className="btn btn-primary" style={{ border: "none" }} onClick={openEditModal}>
                        <EditIcon />
                    </button>
                </td>
                <td>
                    <button className="btn btn-danger" style={{ border: "none" }} onClick={async () => {
                        await fetch("https://tranquil-sands-93018.herokuapp.com/admin/reservations/" + reservation._id, {
                            method: "DELETE",
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                            }
                        }).then(body => {
                            window.location.reload()
                        })
                    }}>
                        <DeleteIcon />
                    </button>
                </td>
            </tr>
            <Modal show={showEditModal} onHide={closeEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="checkin">CheckIn</label>
                                <input type="date" className="form-control" id="checkin" value={checkinchange} onChange={handleCheckinChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="checkout">CheckOut</label>
                                <input type="date" className="form-control" id="checkout" value={checkoutchange} onChange={handleCheckoutChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="guests">Guests</label>
                                <input type="number" className="form-control" id="guests" value={guestChange} onChange={handleGuestsChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="cost">Cost</label>
                                <input type="number" className="form-control" id="cost" value={costchange} onChange={handleCostChange} />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={async () => {
                        await fetch("https://tranquil-sands-93018.herokuapp.com/admin/reservations/" + reservation._id, {
                            method: "PUT",
                            body: JSON.stringify({
                                checkIn: checkinchange,
                                checkOut: checkoutchange,
                                no_Of_Guests: guestChange,
                                cost: costchange
                            }),
                            headers: {
                                "Content-type": "application/json; charset=UTF-8",
                            }
                        }).then(response => {
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
        </>
    );
}

export default ReservationData;