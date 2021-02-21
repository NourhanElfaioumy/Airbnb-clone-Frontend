import { React, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Modal, Button } from "react-bootstrap";
function HostData({ home }) {
    const [showEditModal, isEditOpen] = useState(false);
    const [showDelModal, isDelOpen] = useState(false);
    const [addresschange, address] = useState(home.address);
    const [namechange, name] = useState(home.name);
    const [typechange, type] = useState(home.type);
    const [guestChange, guest] = useState(home.no_Of_Guests);
    const [pricechange, price] = useState(home.averagePricePerNight);
    const [bedroomchange, bedroom] = useState(home.no_Of_Bedrooms);
    const [bathroomchange, bathroom] = useState(home.no_Of_Bathrooms);
    const [propertyTypechange, proptype] = useState(home.propertyType);
    const [gymchange, gym] = useState(home.Gym);
    const [poolchange, pool] = useState(home.pool);
    const [beachfrontchange, beachfront] = useState(home.BeachFront);
    const openEditModal = () => isEditOpen(true);
    const closeEditModal = () => isEditOpen(false);
    const openDelModal = () => isDelOpen(true);
    const closeDelModal = () => isDelOpen(false);
    function handleAddressChange(event) {
        address(event.target.value);
    }
    function handleNameChange(event) {
        name(event.target.value);
    }
    function handleTypeChange(event) {
        type(event.target.value);
    }
    function handleGuestsChange(event) {
        guest(event.target.value);
    }
    function handlePriceChange(event) {
        price(event.target.value);
    }
    function handleBedroomChange(event) {
        bedroom(event.target.value);
    }
    function handleBathroomChange(event) {
        bathroom(event.target.value);
    }
    function handlePropChange(event) {
        proptype(event.target.value);
    }
    function handlePoolChange(event) {
        pool(event.target.checked);
    }
    function handleGymChange(event) {
        gym(event.target.checked);
    }
    function handleBFrontChange(event) {
        beachfront(event.target.checked);
    }
    return (
        <>
            <tr>
                <td>{home.address}</td>
                <td>{home.name}</td>
                <td>{home.type}</td>
                <td>{home.no_Of_Guests}</td>
                <td>{home.averagePricePerNight}</td>
                <td>{home.no_Of_Bedrooms}</td>
                <td>{home.no_Of_Bathrooms}</td>
                <td>{home.propertyType}</td>
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
                    <Modal.Title>Edit Home</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Address" value={addresschange} onChange={handleAddressChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name" value={namechange} onChange={handleNameChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="type">Type</label>
                                <select required className="form-control" name="type" placeholder="Chooese Your Type" defaultValue="Entire Place" value={typechange} onChange={handleTypeChange}>
                                    <option value="" disabled selected>
                                        Chooese Your Type
                                    </option>
                                    <option value="Entire Place">Entire Place</option>
                                    <option value="Private Room">Private Room</option>
                                    <option value="Shared Room">Shared Room</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="guests">Guests</label>
                                <input type="number" className="form-control" id="guests" placeholder="Guests" value={guestChange} onChange={handleGuestsChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="price">Price</label>
                                <input type="number" class="form-control" id="price" placeholder="Price" value={pricechange} onChange={handlePriceChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="bedrooms">Bedrooms</label>
                                <input type="number" className="form-control" id="bedrooms" placeholder="Bedrooms" value={bedroomchange} onChange={handleBedroomChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="bathrooms">Bathrooms</label>
                                <input type="number" class="form-control" id="bathrooms" placeholder="Bathrooms" value={bathroomchange} onChange={handleBathroomChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="propertytype">propertyType</label>
                                <select
                                    required
                                    className="form-control"
                                    placeholder="Property Type"
                                    name="proptype"
                                    defaultValue="Apartment"
                                    value={propertyTypechange}
                                    onChange={handlePropChange}
                                >
                                    <option value="" disabled selected>
                                        Property Type
                            </option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Bed and breakfast">
                                        Bed and breakfast
                            </option>
                                    <option value="Boutique hotel">
                                        Boutique hotel
                            </option>
                                    <option value="House">House</option>
                                    <option value="Secondary unit">
                                        Secondary unit
                            </option>
                                    <option value="Unique space">Unique space</option>
                                </select>                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="pool">Pool</label>
                                <input type="checkbox" className="form-control" id="pool" value={poolchange} onChange={handlePoolChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="gym">Gym</label>
                                <input type="checkbox" class="form-control" id="gym" value={gymchange} onChange={handleGymChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="beachfront">BeachFront</label>
                                <input type="checkbox" class="form-control" id="beachfront" value={beachfrontchange} onChange={handleBFrontChange} />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={async () => {
                        await fetch("https://tranquil-sands-93018.herokuapp.com/admin/homes/" + home._id, {
                            method: "PUT",
                            body: JSON.stringify({
                                address: addresschange,
                                name: namechange,
                                type: typechange,
                                no_Of_Guests: guestChange,
                                averagePricePerNight: pricechange,
                                no_Of_Bedrooms: bedroomchange,
                                no_Of_Bathrooms: bathroomchange,
                                propertyType: propertyTypechange,
                                pool: poolchange,
                                Gym: gymchange,
                                BeachFront: beachfrontchange
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
            <Modal show={showDelModal} onHide={closeDelModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Home</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {home.name} ?
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={async () => {
                        await fetch("https://tranquil-sands-93018.herokuapp.com/admin/homes/" + home._id, {
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

export default HostData;
