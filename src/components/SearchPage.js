import React ,{Component} from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

export default class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render = () =>{
          var date1 = new Date(this.props.search.fromDate); 
var date2 = new Date(this.props.search.toDate); 
        var Difference_In_Time = date2.getTime() - date1.getTime()
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        var userID = localStorage.getItem("user")._id

        console.log(this.props.data)
        console.log(this.props.search)
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>{this.props.search.fromDate +" to "+this.props.search.toDate+" "+this.props.search.guests+" guests"}</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {this.props.data.map((item)=>{
                if(item.reservedhomes.length>0){
                return(
                <SearchResult img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg" location={item.location} title={item.name} description={item.no_Of_Guests +" guest . "+item.no_Of_Bedrooms+" bedroom . "+item.no_Of_Bathrooms+" bathrooms . "+item.propertyType+" Home"} star={3.8} price={`${item.averagePricePerNight}EGP/ night`} total={(item.averagePricePerNight)*Difference_In_Days} userID={userID} hostID={item.HostID} guests={this.props.search.guests} fromDate={this.props.search.fromDate} toDate={this.props.search.toDate} hostedHomeID={item._id}/>
            )}})}

        </div>
    )


}

}