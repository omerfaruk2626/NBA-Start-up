import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
// import PlayerCard from './components/PlayerCard';
import { data } from './helper/data';
const App = () => {
    const [search, setSearch] = useState('')
    return (
        <div>
        <Header data={data} search={search} setSearch={setSearch} />
        <CardContainer data={data} search={search} />

        </div>
    );
}

export default App