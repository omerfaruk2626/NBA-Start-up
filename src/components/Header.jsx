import logo from "../assets/nba-logo.png";
import React, { useState } from 'react';


const Header = ({ data, search, setSearch }) => {
    const [team, setTeam] = useState('all')
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <h1>Legends</h1>
            <input type="search" id="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search.." />
            <div>


            </div>
        </div>
    )
}

export default Header;
