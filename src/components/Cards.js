import React from 'react'
import './Cards.css'

export const Cards = () => {
    return (

        <div className="container-fluid">
            <div className=" row first-card ml-5 pl-3 pt-5">
            <div className="col-12 ml-3">
                <h1>Live Anywhere</h1>
            </div>
            <div className="fimg col-3 p-3" >
                <img src="../imgs/first.jpg" alt=""/>
                <a href ="#"> <h3>Entier homes</h3></a>
            </div>
            <div className="simg col-3 p-3">
                <img src="../imgs/second.jpg" alt=""/>
                <a href ="#"><h3>Cabins and cottages</h3></a>
            </div>
            <div className="timg col-3 p-3">
                <img src="../imgs/third.jpg" alt=""/>
                <a href ="#"><h3>Unique stays</h3></a>
            </div>
            <div className="foimg col-3 p-3">
                <img src="../imgs/fourth.jpg" alt=""/>
                <a href ="#"><h3>Pets welcome</h3></a>
            </div>
            </div>
        <div className="row second-card ml-5 pl-3 pt-5 ">
            <div className="col-12">
                <h2>Experience the world</h2>
                <h4>Unique activites with local experts-in person or online</h4>
            </div>
            <div className="fiimg col-4 p-3" >
                <img src="../imgs/fifth.jpg" alt=""/>
                 <h2>Entier homes</h2>
                <h4>Travle the world without leaving home</h4>
            </div>
            <div className="simg col-4 p-3" >
                <img src="../imgs/sixth.jpg" alt=""/>
                 <h2>Experiences</h2>
                <h4>Things to do whereever you are</h4>
            </div>
             <div className="seimg col-4 p-3" >
                <img src="../imgs/seventh.jpg" alt=""/>
                 <h2>Adventures</h2>
                <h4>Multi-day trips with meals and stays</h4>
            </div>
        </div>
        <div className="row third-card ml-5 pl-3 pt-5 ">
            <div className="col-12">
                <h2>Join million of hosts on Airbnb</h2>
                </div>
                <div className="col-4 eimg p-3" >
                <img src="../imgs/eighth.jpg" alt="" className="img-fluid "/>
                 <h3>Host your home</h3>
                 </div>
                 <div className="col-4 nimg  p-3" >
                <img src="../imgs/nineth.jpg" alt=""/>
                 <h3>Host an online experience </h3>
                 </div>
                 <div className="col-4 timg  p-3" >
                <img src="../imgs/tenth.jpg" alt=""/>
                 <h3>Host an experience</h3>
                 </div>
                </div>
        </div>
    )
}
