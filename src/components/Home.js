import React , {useState}from 'react'
import './Home.css'
import Banner from './Banner'
import { Cards } from './Cards'
import { Button } from '@material-ui/core'
import Search from './Search'
const Home = () => {
    const [showSearch, setShowSearch]= useState(false);
    return (
        <div className="home">
 <div className="banner__search">
               
                <Button variant="outlined" className="banner__searchButton .text-danger

" onClick={()=>
                setShowSearch(!showSearch)
                }>Search Date</Button>
                </div>

            <Banner/>
            {showSearch && <Search/>}
            <Cards/>

            {/* <Footer/> */}
            
        </div>
    )
}

export default Home
