import React, { useState } from 'react'
import PlayerCard from './PlayerCard'

export const CardContainer = ({ data, search }) => {
    const filtredPlayer = data.filter((player) => player.name.toLowerCase().includes(search.toLowerCase().trim()))
    return (
        <div className="card-container">
            {filtredPlayer.map((player, index) => (
                <PlayerCard key={index} player={player} />
            )
            )
            }
        </div>
    )
}


export default CardContainer